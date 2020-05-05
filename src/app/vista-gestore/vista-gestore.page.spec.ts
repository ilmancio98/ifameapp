import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VistaGestorePage } from './vista-gestore.page';

describe('VistaGestorePage', () => {
  let component: VistaGestorePage;
  let fixture: ComponentFixture<VistaGestorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaGestorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VistaGestorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
