import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistraGestorePage } from './registra-gestore.page';

describe('RegistraGestorePage', () => {
  let component: RegistraGestorePage;
  let fixture: ComponentFixture<RegistraGestorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraGestorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistraGestorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
