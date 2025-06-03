import { ComponentFixture, TestBed } from '@angular/core/testing';
import AnarchitectsUiHeaderComponent from './header.component';

describe('AnarchitectsUiHeaderComponent', () => {
  let component: AnarchitectsUiHeaderComponent;
  let fixture: ComponentFixture<AnarchitectsUiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnarchitectsUiHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnarchitectsUiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
