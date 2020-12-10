import { criminalList } from "./criminals/criminalList.js"
import { ConvictionSelect } from "./convictions/convictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/noteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import { witnessButton } from "./witnesses/witnessButton.js"

import "./notes/noteList.js"
import "./criminals/alibiList.js"
import "./witnesses/witnessList.js"

criminalList()
ConvictionSelect()
OfficerSelect()
NoteForm()
ShowNoteButton()
witnessButton()