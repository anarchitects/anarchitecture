import { ComponentFixture, TestBed } from '@angular/core/testing';
import AnarchitectsUiHeaderComponent from './header.component';
import { provideRouter } from '@angular/router';

describe('AnarchitectsUiHeaderComponent', () => {
  let component: AnarchitectsUiHeaderComponent;
  let fixture: ComponentFixture<AnarchitectsUiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnarchitectsUiHeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AnarchitectsUiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a nav element with class "navbar"', () => {
    const nav = fixture.nativeElement.querySelector('nav.navbar');
    expect(nav).toBeTruthy();
  });

  it('should render a list with 5 navigation links', () => {
    const links = fixture.nativeElement.querySelectorAll('a[routerLink]');
    expect(links.length).toBe(5);
  });

  it('should have correct routerLinks and text', () => {
    const links = fixture.nativeElement.querySelectorAll('a[routerLink]');
    const expected = [
      { link: '/', text: 'Home' },
      { link: '/ude', text: 'UDE' },
      { link: '/focus-areas', text: 'Focus Areas' },
      { link: '/about', text: 'About' },
      { link: '/contact', text: 'Contact' },
    ];
    expected.forEach((exp, i) => {
      expect(links[i].getAttribute('ng-reflect-router-link')).toBe(exp.link);
      expect(links[i].textContent.trim()).toBe(exp.text);
    });
  });
});
