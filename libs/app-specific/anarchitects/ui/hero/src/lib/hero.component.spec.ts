import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnarchitectsUiHeroComponent } from './hero.component';

describe('AnarchitectsUiHeroComponent', () => {
  let component: AnarchitectsUiHeroComponent;
  let fixture: ComponentFixture<AnarchitectsUiHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnarchitectsUiHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnarchitectsUiHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct title', () => {
    const title = fixture.nativeElement.querySelector('.hero-title');
    expect(title.textContent.trim()).toBe('Architecting clarity across software and data.');
  });

  it('should render the correct subtitle', () => {
    const tagline = fixture.nativeElement.querySelector('.hero-tagline');
    expect(tagline.textContent.trim()).toBe('From business to bounded context — we help teams align, model, and build modular platforms with purpose.');
  });

  it('should render the correct CTA button', () => {
    const cta = fixture.nativeElement.querySelector('.hero-cta');
    expect(cta.textContent.trim()).toBe('🔍 Explore the Method');
  });
});
