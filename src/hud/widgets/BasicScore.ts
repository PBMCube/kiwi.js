/** 
* A HUDWidget that controls and displays a score.
* @module HUD
* @submodule Widget
*/

module Kiwi.HUD.Widget {

    /**
    * @class BasicScore
    * @extends TextField
    * @constructor
    * @param game {Game} The game that this BasicScore belongs to.
    * @param x {number} The cooridnates of the game on the x-axis.
    * @param y {number} The cooridnates of the game on the y-axis.
    * @param [initial=0] {number} The initial score to start off at.
    * @return {BasicScore}
    */
    
    export class BasicScore extends Kiwi.HUD.Widget.TextField {
       
        constructor(game: Kiwi.Game, x: number, y: number, initial:number=0) {
            super(game, "basicScore", x, y);
            this.counter = this.components.add(new Kiwi.HUD.Components.Counter(this, initial, 1));
            this.counter.updated.add(this._updateText, this);
            this._updateText();
        }

        /**
        * Returns the type of object that this is.
        * @method objType
        * @return {String}
        * @public
        */
        public objType(): string {
            return 'BasicScoreWidget';
        }

        /**
        * Holds a reference to the counter component.
        * @property counter
        * @type Counter
        * @public
        */
        public counter: Kiwi.HUD.Components.Counter;
        
        /**
        * Updates the text inside the textfield.
        * @method _updateText
        * @private
        */
        public _updateText() {
            this.text = String(this.counter.value);
        }

    }

}
