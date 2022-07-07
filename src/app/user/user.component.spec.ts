import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//component Testing
  it('Testing title(Component Name)', () => {
    expect(component.componentName).toBe("user");
  });

  it('Testing Sum function with +ve value', () => {
    expect(component.sum(2,10)).toBe(12);
  });
  it('Testing Sum function with -ve value', () => {
    expect(component.sum(-2,10)).toBe(8);
  });

  it('Testing Html elements content', () => {
    const data=fixture.nativeElement;
    expect(data.querySelector(".UserHeading").textContent).toContain("User");
  });
});

