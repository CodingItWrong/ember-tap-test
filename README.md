# tap-test

Demonstrates that when a button is tapped and replaced by another button by Ember, the new button retains the active state.

## Running

* `ember serve`
* Open app on iPhone or in iOS Simulator
* Tap any button A-C
* Buttons are replaced by D-F.
* Expected behavior: none of the buttons will have an active state, because none of these buttons has been tapped.
* Actual behavior: the button in the same position as the one you tapped is darkened. This is the CSS applied to the active state.
