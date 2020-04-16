import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistaClientePage } from './vista-cliente.page';

describe('VistaClientePage', () => {
  let component: VistaClientePage;
  let fixture: ComponentFixture<VistaClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
