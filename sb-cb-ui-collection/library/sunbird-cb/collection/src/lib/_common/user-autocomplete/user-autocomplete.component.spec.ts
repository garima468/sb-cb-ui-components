import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { UserAutocompleteComponent } from './user-autocomplete.component'

describe('UserAutocompleteComponent', () => {
  let component: UserAutocompleteComponent
  let fixture: ComponentFixture<UserAutocompleteComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserAutocompleteComponent],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAutocompleteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
