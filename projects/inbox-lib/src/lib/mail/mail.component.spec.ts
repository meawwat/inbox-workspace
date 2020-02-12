import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComponent } from './mail.component';
import { MailSchema } from './mail.schema';

describe('MailComponent', () => {
  let component: MailComponent;
  let fixture: ComponentFixture<MailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('MailSchema Data', () => {
    it('should handle empty data', () => {
      let mail: MailSchema;

      const fixture = TestBed.createComponent(MailComponent);
      fixture.componentInstance.mailContent = mail
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.line-1 span.text').title).toEqual('');
      expect(compiled.querySelector('.line-1 span.text').textContent).toEqual('');
      expect(compiled.querySelector('.line-2 span.text').textContent).toEqual('');
      expect(compiled.querySelector('.line-3 span.text').textContent).toEqual('');
    });
    
    it('shoult handle null', () => {
      const fixture = TestBed.createComponent(MailComponent);
      fixture.componentInstance.mailContent = null
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.line-1 span.text').title).toEqual('');
      expect(compiled.querySelector('.line-1 span.text').textContent).toEqual('');
      expect(compiled.querySelector('.line-2 span.text').textContent).toEqual('');
      expect(compiled.querySelector('.line-3 span.text').textContent).toEqual('');
    });

    it('shoult handle undefined', () => {
      const fixture = TestBed.createComponent(MailComponent);
      fixture.componentInstance.mailContent = undefined
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.line-1 span.text').title).toEqual('');
      expect(compiled.querySelector('.line-1 span.text').textContent).toEqual('');
      expect(compiled.querySelector('.line-2 span.text').textContent).toEqual('');
      expect(compiled.querySelector('.line-3 span.text').textContent).toEqual('');
    });
  });
  
  it('shoult handle empty email', () => {
    let mail: MailSchema = {
      from: {
        name: 'Hello Sawaddee',
        email: ''
      },
      subject: 'Greeting !!',
      body: 'Oscar winners Sir Anthony Hopkins and Ed Harris.'
    }
    const fixture = TestBed.createComponent(MailComponent);
    fixture.componentInstance.mailContent = mail
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.line-1 span.text').title).toEqual('');
    expect(compiled.querySelector('.line-1 span.text').textContent).toEqual('Hello Sawaddee');
    expect(compiled.querySelector('.line-2 span.text').textContent).toEqual('Greeting !!');
    expect(compiled.querySelector('.line-3 span.text').textContent).toEqual('Oscar winners Sir Anthony Hopkins and Ed Harris.');
  });

  it('shoult handle empty name', () => {
    let mail: MailSchema = {
      from: {
        name: '',
        email: 'hello@sawaddee.com'
      },
      subject: 'Greeting !!',
      body: 'Oscar winners Sir Anthony Hopkins and Ed Harris.'
    }
    const fixture = TestBed.createComponent(MailComponent);
    fixture.componentInstance.mailContent = mail
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.line-1 span.text').title).toEqual('hello@sawaddee.com');
    expect(compiled.querySelector('.line-1 span.text').textContent).toEqual('');
    expect(compiled.querySelector('.line-2 span.text').textContent).toEqual('Greeting !!');
    expect(compiled.querySelector('.line-3 span.text').textContent).toEqual('Oscar winners Sir Anthony Hopkins and Ed Harris.');
  });
  
  it('shoult handle empty subject', () => {
    let mail: MailSchema = {
      from: {
        name: 'Hello Sawaddee',
        email: 'hello@sawaddee.com'
      },
      subject: '',
      body: 'Oscar winners Sir Anthony Hopkins and Ed Harris.'
    }
    const fixture = TestBed.createComponent(MailComponent);
    fixture.componentInstance.mailContent = mail
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.line-1 span.text').title).toEqual('hello@sawaddee.com');
    expect(compiled.querySelector('.line-1 span.text').textContent).toEqual('Hello Sawaddee');
    expect(compiled.querySelector('.line-2 span.text').textContent).toEqual('');
    expect(compiled.querySelector('.line-3 span.text').textContent).toEqual('Oscar winners Sir Anthony Hopkins and Ed Harris.');
  });
  
  it('shoult handle empty body', () => {
    let mail: MailSchema = {
      from: {
        name: 'Hello Sawaddee',
        email: 'hello@sawaddee.com'
      },
      subject: 'Greeting !!',
      body: ''
    }
    const fixture = TestBed.createComponent(MailComponent);
    fixture.componentInstance.mailContent = mail
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.line-1 span.text').title).toEqual('hello@sawaddee.com');
    expect(compiled.querySelector('.line-1 span.text').textContent).toEqual('Hello Sawaddee');
    expect(compiled.querySelector('.line-2 span.text').textContent).toEqual('Greeting !!');
    expect(compiled.querySelector('.line-3 span.text').textContent).toEqual('');
  });
});
