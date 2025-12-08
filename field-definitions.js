// Field definitions for Clangen Save Editor
// Requires: dropdown_options.js loaded first
//
// Each field specifies:
//   dataType: what the JSON value should be (str, int, bool, list, compound)
//   inputType: what kind of form field to render
//   options: reference to options array (if dropdown)
//   nullable: whether null is a valid value (will show <None> option)

const FIELD_DEFS = {
    'ID':                   { dataType: 'str',      inputType: 'display' },
    'name_prefix':          { dataType: 'str',      inputType: 'text' },
    'name_suffix':          { dataType: 'str',      inputType: 'text' },
    'specsuffix_hidden':    { dataType: 'bool',     inputType: 'checkbox' },
    'gender':               { dataType: 'str',      inputType: 'dropdown',  options: genders },
    'gender_align':         { dataType: 'str',      inputType: 'text' },
    // pronouns: SKIP (complex nested object)
    'birth_cooldown':       { dataType: 'int',      inputType: 'number' },
    // status: SKIP (complex nested object, reworked)
    'dark_forest_affinity': { dataType: 'int',      inputType: 'number' },
    'starclan_affinity':    { dataType: 'int',      inputType: 'number' },
    'backstory':            { dataType: 'str',      inputType: 'dropdown',  options: backstories },
    'moons':                { dataType: 'int',      inputType: 'number' },
    'trait':                { dataType: 'str',      inputType: 'dropdown',  options: traits },
    'facets':               { dataType: 'compound', inputType: 'facets' },
    'parent1':              { dataType: 'str',      inputType: 'text',      nullable: true },
    'parent2':              { dataType: 'str',      inputType: 'text',      nullable: true },
    'adoptive_parents':     { dataType: 'list',     inputType: 'catid-array' },
    'mentor':               { dataType: 'str',      inputType: 'text',      nullable: true },
    'former_mentor':        { dataType: 'list',     inputType: 'catid-array' },
    'patrol_with_mentor':   { dataType: 'int',      inputType: 'number' },
    'mate':                 { dataType: 'list',     inputType: 'catid-array' },
    'previous_mates':       { dataType: 'list',     inputType: 'catid-array' },
    'paralyzed':            { dataType: 'bool',     inputType: 'checkbox' },
    'no_kits':              { dataType: 'bool',     inputType: 'checkbox' },
    'no_retire':            { dataType: 'bool',     inputType: 'checkbox' },
    'no_mates':             { dataType: 'bool',     inputType: 'checkbox' },
    'pelt_name':            { dataType: 'str',      inputType: 'dropdown',  options: peltPatterns },
    'pelt_color':           { dataType: 'str',      inputType: 'dropdown',  options: peltColours },
    'pelt_length':          { dataType: 'str',      inputType: 'dropdown',  options: peltLengths },
    'sprite_newborn':       { dataType: 'str',      inputType: 'dropdown',  options: newbornPoses },
    'sprite_kitten':        { dataType: 'str',      inputType: 'dropdown',  options: kittenPoses },
    'sprite_adolescent':    { dataType: 'str',      inputType: 'dropdown',  options: adolescentPoses },
    'sprite_adult':         { dataType: 'str',      inputType: 'dropdown',  options: adultPoses },
    'sprite_senior':        { dataType: 'str',      inputType: 'dropdown',  options: seniorPoses },
    'sprite_para_adult':    { dataType: 'str',      inputType: 'dropdown',  options: paraAdultPoses },
    'eye_colour':           { dataType: 'str',      inputType: 'dropdown',  options: eyeColours },
    'eye_colour2':          { dataType: 'str',      inputType: 'dropdown',  options: eyeColours, nullable: true },
    'reverse':              { dataType: 'bool',     inputType: 'checkbox' },
    'white_patches':        { dataType: 'str',      inputType: 'dropdown',  options: whitePatches, nullable: true },
    'vitiligo':             { dataType: 'str',      inputType: 'dropdown',  options: vitiligoMarkings, nullable: true },
    'points':               { dataType: 'str',      inputType: 'dropdown',  options: pointMarkings, nullable: true },
    'white_patches_tint':   { dataType: 'str',      inputType: 'dropdown',  options: whitePatchesTints, nullable: true },
    'tortie_base':          { dataType: 'str',      inputType: 'dropdown',  options: peltPatterns, nullable: true },
    'tortie_color':         { dataType: 'str',      inputType: 'dropdown',  options: peltColours, nullable: true },
    'tortie_pattern':       { dataType: 'str',      inputType: 'dropdown',  options: peltPatterns, nullable: true },
    'skin':                 { dataType: 'str',      inputType: 'dropdown',  options: skins },
    'tint':                 { dataType: 'str',      inputType: 'dropdown',  options: tints },
    'skill_dict.primary':   { dataType: 'compound', inputType: 'skill',     options: skills },
    'skill_dict.secondary': { dataType: 'compound', inputType: 'skill',     options: skills, nullable: true },
    // skill_dict.hidden: SKIP
    'scars':                { dataType: 'list',     inputType: 'dropdown-array', options: scarTypes },
    'accessory':            { dataType: 'list',     inputType: 'dropdown-array', options: accessories },
    'experience':           { dataType: 'int',      inputType: 'number' },
    'dead_moons':           { dataType: 'int',      inputType: 'number' },
    'current_apprentice':   { dataType: 'list',     inputType: 'catid-array' },
    'former_apprentices':   { dataType: 'list',     inputType: 'catid-array' },
    'faded_offspring':      { dataType: 'list',     inputType: 'catid-array' },
    'opacity':              { dataType: 'int',      inputType: 'number' },
    'prevent_fading':       { dataType: 'bool',     inputType: 'checkbox' },
    'favourite':            { dataType: 'bool',     inputType: 'checkbox' },
};