import { Type } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MailSchema } from './mail/mail.schema';

import { InboxLibComponent } from './inbox-lib.component';

describe('InboxLibComponent', () => {
  let fixture: ComponentFixture<InboxLibComponent>;
  let component: InboxLibComponent;
  const dummyMail: Array<MailSchema> = [
    {
      from: {
        name: 'Roberto Firmino',
        email: 'fino@yamaha.com'
      },
      subject: 'Sawaddee Jaa',
      body: 'Shooooooooooooooooooooooooto'
    },{
      from: {
        name: 'Sadio Mane',
        email: 'manemanaenae@eiei.com'
      },
      subject: 'I have a pen',
      body: 'I have an apple.'
    },{
      from: {
        name: 'Mohamed Salah',
        email: 'naihoi@wongnai.com'
      },
      subject: 'hit the table !!',
      body: 'ummmm, arrrrroooooooi'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ InboxLibComponent ]
    })
    .compileComponents();
  }));

  describe('Init Component without initLoadUrl', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(InboxLibComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should keep lastRow = 0', () => {
      expect(component.lastRow).toEqual(0);
    });
  });

  describe('Init Component with initLoadUrl', () => {
    let httpMock: HttpTestingController;
    const mockUrl = 'http://localhost:4209/inbox?_start=0&_limit=3';
    
    beforeEach(async () => {
      fixture = TestBed.createComponent(InboxLibComponent);
      component = fixture.componentInstance;
      httpMock = fixture.debugElement.injector.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
      
      component.initLoadUrl = mockUrl;

      fixture.detectChanges();
      const req = httpMock.expectOne(mockUrl);
      req.flush(dummyMail);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should keep lastRow = 3 after load 3 record', () => {
      expect(component.lastRow).toBe(3);
    });

    it('should have 3 item', () => {
      expect(component.json.length).toBe(3);
    });
  });
});
