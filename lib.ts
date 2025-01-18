import { LOCALS } from "ielib"
import { DisplayString, Myself, ReallyForceSpellRES, SetGlobal } from "ielib/bg2"

/** Doomed! */
export const LVAR_doomed = "doomed"

/** Fires a spell-trigger just to show what a great mage he is */
export const LVAR_castSpellTrigger = "SpellTrigger"

/** Common spell trigger actions */
export function actSpellTrigger() {
    DisplayString(Myself, 39968)    // ~Spell Trigger - Fired~
    ReallyForceSpellRES("WM_LUCK", Myself)
    SetGlobal(LVAR_castSpellTrigger, LOCALS, 1)
}
