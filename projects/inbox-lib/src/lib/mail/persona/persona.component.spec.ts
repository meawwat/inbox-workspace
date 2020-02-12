import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaComponent } from './persona.component';

describe('PersonaComponent', () => {
  let component: PersonaComponent;
  let fixture: ComponentFixture<PersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getInitial', () => {
    it('shoult handle empty data', () => {
      component.name = '';
      expect(component.getInitial()).toEqual('');
    });

    it('shoult handle null', () => {
      component.name = null;
      expect(component.getInitial()).toEqual('');
    });

    it('shoult handle undefined', () => {
      component.name = undefined;
      expect(component.getInitial()).toEqual('');
    });

    it('should create initial from name and surname', () => {
      component.name = 'Chadchart Hulk Trip Sittipunt';
      expect(component.getInitial()).toEqual('CS');
    });

    it('should be all upper case', () => {
      component.name = 'animal CAT';
      expect(component.getInitial()).toEqual('AC');
    });
  });

  describe('getColor', () => {
    it('should handle empty data', () => {
      component.email = '';
      expect(component.getColor()).toEqual('');
    });
    
    it('shoult handle null', () => {
      component.email = null;
      expect(component.getColor()).toEqual('');
    });

    it('shoult handle undefined', () => {
      component.email = undefined;
      expect(component.getColor()).toEqual('');
    });

    it('should be blueMagenta30 (#5c2e91)', () => {
      component.email = "tetsu@larc.com";
      expect(component.getColor()).toEqual('#5c2e91');
    });

    it('should be different color', () => {
      component.email = "tetsu@larc.com";
      let color1 = component.getColor();

      component.email = "godzilla@hahasoft.com";
      let color2 = component.getColor();

      expect(color1).not.toEqual(color2);
    });

    it('should be same color', () => {
      component.email = "tetsu@larc.com";
      let color1 = component.getColor();
      
      component.email = "godzilla@hahasoft.com";
      let color2 = component.getColor();

      component.email = "tetsu@larc.com";
      let color3 = component.getColor();

      expect(color1).toEqual(color3);
    });
  });
});
