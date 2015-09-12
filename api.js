YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "PantryItem",
        "checkInputs()",
        "editEmail()",
        "getHousehold()",
        "getUser()",
        "inviteUsers()",
        "joinHouse()",
        "listHelpers",
        "newInvite()",
        "pantryHelpers",
        "redirect()",
        "sendHousehold()",
        "submitEmail()",
        "submitHousehold()",
        "updateHouse()",
        "userHelpers"
    ],
    "modules": [
        "Household Controller",
        "groceryHelpers",
        "nn-helpers"
    ],
    "allModules": [
        {
            "displayName": "groceryHelpers",
            "name": "groceryHelpers",
            "description": "Provides methods for creating household pantries and lists"
        },
        {
            "displayName": "Household Controller",
            "name": "Household Controller",
            "description": "Household Controller: Controlls household.html and createHousehold.html"
        },
        {
            "displayName": "nn-helpers",
            "name": "nn-helpers",
            "description": "This module sets up individual items in the general pantry\nIt creates a neural network for each item and sets default values for\nthe trainingSet and average time to expiration for each item.\nIt also creates methods for creating and updating user-specific pantry items."
        }
    ],
    "elements": []
} };
});