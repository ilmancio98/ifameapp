import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SceltaUtentePage } from './scelta-utente.page';

describe('SceltaUtentePage', () => {
  let component: SceltaUtentePage;
  let fixture: ComponentFixture<SceltaUtentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceltaUtentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SceltaUtentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
