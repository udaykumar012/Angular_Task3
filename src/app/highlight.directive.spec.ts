import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';
 @Component({
   template:`
   <p appHighlight="cyan">First</p>
   <p appHighlight>Second</p>
   `
 })
 //need to create a host component in your test,to test various usages of that attribute
 class DirectiveHostComponent{

 }
describe('HighlightDirective', () => {
  let fixture:ComponentFixture<DirectiveHostComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations:[DirectiveHostComponent,HighlightDirective]
    })
    .compileComponents();
    
  })
  beforeEach(()=>{
    fixture=TestBed.createComponent(DirectiveHostComponent)
    fixture.detectChanges()//render component template
  })
  it('should create an instance', () => {
  //  const directive = new HighlightDirective();
    expect(fixture).toBeTruthy();
  });
  it('should highlight the first element with cyan', () => {
    //  const directive = new HighlightDirective();
   let de= fixture.debugElement.queryAll(By.css('p'))[0]
   expect(de.nativeElement.style.backgroundColor).toBe('cyan')

      //expect(fixture).toBeTruthy();
    });
    it('should highlight the second element with yellow', () => {
      //  const directive = new HighlightDirective();
     let de= fixture.debugElement.queryAll(By.css('p'))[1]
     expect(de.nativeElement.style.backgroundColor).toBe('yellow')
  //nativelement is browser specific api that returns or give access to dom tree
  //instead of creating an html element tree,angular creates a debugelement tree that wraps
  //the natuive elements for the runtime platform .the nativeElement property un warps the debug 
  //element and return the platform specific element
        //expect(fixture).toBeTruthy();
      });
});
