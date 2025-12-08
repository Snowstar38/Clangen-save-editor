// Dropdown options for Clangen Save Editor

const peltColours = ['WHITE', 'PALEGREY', 'SILVER', 'GREY', 'DARKGREY', 'GHOST', 'BLACK', 'CREAM', 'PALEGINGER', 'GOLDEN', 'GINGER', 'DARKGINGER', 'SIENNA', 'LIGHTBROWN', 'LILAC', 'BROWN', 'GOLDEN-BROWN', 'DARKBROWN', 'CHOCOLATE'];

const peltPatterns = ['Tabby', 'Ticked', 'Mackerel', 'Classic', 'Sokoke', 'Agouti', 'Speckled', 'Rosette', 'SingleColour', 'TwoColour', 'Smoke', 'Singlestripe', 'Bengal', 'Marbled', 'Masked', 'Tortie', 'Calico'];

const whitePatches = ['LITTLE', 'EXTRA', 'LIGHTTUXEDO', 'BUZZARDFANG', 'TIP', 'PAWS', 'BROKENBLAZE', 'SCOURGE', 'BLAZE', 'BIB', 'VEE', 'HONEY', 'BELLY', 'TAILTIP', 'TOES', 'TOESTAIL', 'RAVENPAW', 'LILTWO', 'LUNA', 'MUSTACHE', 'REVERSEHEART', 'SPARKLE', 'RIGHTEAR', 'LEFTEAR', 'ESTRELLA', 'REVERSEEYE', 'BACKSPOT', 'EYEBAGS', 'LOCKET', 'BLAZEMASK', 'TEARS', 'TUXEDO', 'SAVANNAH', 'FADESPOTS', 'FANCY', 'MITAINE', 'DIVA', 'BEARD', 'UNDERS', 'DAMIEN', 'TOPCOVER', 'SQUEAKS', 'STAR', 'SKUNK', 'DAPPLEPAW', 'WINGS', 'WOODPECKER', 'MISS', 'BOWTIE', 'VEST', 'FADEBELLY', 'DIGIT', 'FCTWO', 'FCONE', 'MIA', 'ROSINA', 'PRINCESS', 'DOUGIE', 'ANY', 'ANYTWO', 'BROKEN', 'PIEBALD', 'CURVED', 'SHIBAINU', 'OWL', 'FRECKLES', 'RINGTAIL', 'HALFFACE', 'PANTSTWO', 'GOATEE', 'PRINCE', 'FAROFA', 'MISTER', 'MASKMANTLE', 'PANTS', 'REVERSEPANTS', 'HALFWHITE', 'APPALOOSA', 'GLASS', 'MAO', 'PAINTED', 'BUB', 'SPARROW', 'TRIXIE', 'SAMMY', 'FRONT', 'BLOSSOMSTEP', 'BULLSEYE', 'FINN', 'SCAR', 'BUSTER', 'HAWKBLAZE', 'CAKE', 'VAN', 'PEBBLESHINE', 'ONEEAR', 'LIGHTSONG', 'BLACKSTAR', 'PETAL', 'TAIL', 'APRON', 'CAPSADDLE', 'HEART', 'MOORISH', 'CHESTSPECK', 'HEARTTWO', 'BOOTS', 'COW', 'COWTWO', 'LOVEBUG', 'SHOOTINGSTAR', 'EYESPOT', 'PEBBLE', 'TAILTWO', 'BUDDY', 'KROPKA', 'FULLWHITE'];

const eyeColours = ['YELLOW', 'AMBER', 'HAZEL', 'PALEGREEN', 'GREEN', 'BLUE', 'DARKBLUE', 'GREY', 'CYAN', 'EMERALD', 'HEATHERBLUE', 'SUNLITICE', 'COPPER', 'SAGE', 'COBALT', 'PALEBLUE', 'BRONZE', 'SILVER', 'PALEYELLOW', 'GOLD', 'GREENYELLOW', 'ORANGE'];

const tortieBases = ['ONE', 'TWO', 'THREE', 'FOUR', 'REDTAIL', 'DELILAH', 'HALF', 'STREAK', 'MASK', 'SMOKE', 'MINIMALONE', 'MINIMALTWO', 'MINIMALTHREE', 'MINIMALFOUR', 'OREO', 'SWOOP', 'CHIMERA', 'CHEST', 'ARMTAIL', 'GRUMPYFACE', 'MOTTLED', 'SIDEMASK', 'EYEDOT', 'BANDANA', 'PACMAN', 'STREAMSTRIKE', 'SMUDGED', 'DAUB', 'EMBER', 'BRIE', 'ORIOLE', 'ROBIN', 'BRINDLE', 'PAIGE', 'ROSETAIL', 'SAFI', 'DAPPLENIGHT', 'BLANKET', 'BELOVED', 'BODY', 'SHILOH', 'FRECKLED', 'HEARTBEAT'];

const vitiligoMarkings = ['MOON', 'PHANTOM', 'POWDER', 'BLEACHED', 'VITILIGO', 'VITILIGOTWO', 'KARPATI', 'SMOKEY'];

const pointMarkings = ['COLOURPOINT', 'RAGDOLL', 'SEPIAPOINT', 'MINKPOINT', 'SEALPOINT'];

const accessories = ['CLOVER', 'DAISY', 'WISTERIA', 'GOLDEN CREEPING JENNY', 'RED FEATHERS', 'BLUE FEATHERS', 'JAY FEATHERS', 'GULL FEATHERS', 'SPARROW FEATHERS', 'MAPLE LEAF', 'HOLLY', 'BLUE BERRIES', 'FORGET ME NOTS', 'RYE STALK', 'CATTAIL', 'POPPY', 'ORANGE POPPY', 'CYAN POPPY', 'WHITE POPPY', 'PINK POPPY', 'BLUEBELLS', 'LILY OF THE VALLEY', 'SNAPDRAGON', 'HERBS', 'PETALS', 'NETTLE', 'HEATHER', 'GORSE', 'JUNIPER', 'RASPBERRY', 'LAVENDER', 'OAK LEAVES', 'CATMINT', 'MAPLE SEED', 'LAUREL', 'BULB WHITE', 'BULB YELLOW', 'BULB ORANGE', 'BULB PINK', 'BULB BLUE', 'ROSE MALLOW', 'PICKLEWEED', 'DESERT WILLOW', 'CACTUS FLOWER', 'PRAIRIE FIRE', 'VERBENA EAR', 'VERBENA PELT', 'DRY HERBS', 'DRY CATMINT', 'DRY NETTLES', 'DRY LAURELS', 'MOTH WINGS', 'ROSY MOTH WINGS', 'MORPHO BUTTERFLY', 'MONARCH BUTTERFLY', 'CICADA WINGS', 'BLACK CICADA', 'ROAD RUNNER FEATHER', 'BOW_crimson', 'BOW_blue', 'BOW_yellow', 'BOW_cyan', 'BOW_orange', 'BOW_lime', 'BOW_white', 'BOW_black', 'BOW_green', 'BOW_pink', 'BOW_purple', 'BOW_rose', 'BOW_indigo', 'BOW_FOIL_black_gold', 'BOW_GRADIENT_rainbow', 'LEATHER_crimson', 'LEATHER_blue', 'LEATHER_yellow', 'LEATHER_cyan', 'LEATHER_orange', 'LEATHER_lime', 'LEATHER_white', 'LEATHER_black', 'LEATHER_green', 'LEATHER_pink', 'LEATHER_purple', 'LEATHER_rose', 'LEATHER_indigo', 'LEATHER_SPIKE_crimson_gold', 'LEATHER_SPIKE_blue_gold', 'LEATHER_SPIKE_yellow_silver', 'LEATHER_SPIKE_cyan_gold', 'LEATHER_SPIKE_orange_silver', 'LEATHER_SPIKE_lime_silver', 'LEATHER_SPIKE_white_gold', 'LEATHER_SPIKE_black_gold', 'LEATHER_SPIKE_green_silver', 'LEATHER_SPIKE_pink_gold', 'LEATHER_SPIKE_purple_gold', 'LEATHER_SPIKE_rose_gold', 'LEATHER_SPIKE_indigo_gold', 'LEATHER_GRADIENT_rainbow', 'LEATHER_BELL_crimson', 'LEATHER_BELL_blue', 'LEATHER_BELL_yellow', 'LEATHER_BELL_cyan', 'LEATHER_BELL_orange', 'LEATHER_BELL_lime', 'LEATHER_BELL_white', 'LEATHER_BELL_black', 'LEATHER_BELL_green', 'LEATHER_BELL_pink', 'LEATHER_BELL_purple', 'LEATHER_BELL_rose', 'LEATHER_BELL_indigo', 'LEATHER_BELL_SPIKE_crimson_gold', 'LEATHER_BELL_SPIKE_blue_gold', 'LEATHER_BELL_SPIKE_yellow_silver', 'LEATHER_BELL_SPIKE_cyan_gold', 'LEATHER_BELL_SPIKE_orange_silver', 'LEATHER_BELL_SPIKE_lime_silver', 'LEATHER_BELL_SPIKE_white_gold', 'LEATHER_BELL_SPIKE_black_gold', 'LEATHER_BELL_SPIKE_green_silver', 'LEATHER_BELL_SPIKE_pink_gold', 'LEATHER_BELL_SPIKE_purple_gold', 'LEATHER_BELL_SPIKE_rose_gold', 'LEATHER_BELL_SPIKE_indigo_gold', 'LEATHER_BELL_GRADIENT_rainbow', 'NYLON_crimson', 'NYLON_blue', 'NYLON_yellow', 'NYLON_cyan', 'NYLON_orange', 'NYLON_lime', 'NYLON_white', 'NYLON_black', 'NYLON_black_gold', 'NYLON_green', 'NYLON_pink', 'NYLON_purple', 'NYLON_rose', 'NYLON_indigo', 'NYLON_GRADIENT_rainbow', 'NYLON_BELL_crimson', 'NYLON_BELL_blue', 'NYLON_BELL_yellow', 'NYLON_BELL_cyan', 'NYLON_BELL_orange', 'NYLON_BELL_lime', 'NYLON_BELL_white', 'NYLON_BELL_black', 'NYLON_BELL_black_gold', 'NYLON_BELL_green', 'NYLON_BELL_pink', 'NYLON_BELL_purple', 'NYLON_BELL_rose', 'NYLON_BELL_indigo', 'NYLON_BELL_GRADIENT_rainbow'];

const scarTypes = ['ONE', 'TWO', 'THREE', 'MANLEG', 'BRIGHTHEART', 'MANTAIL', 'BRIDGE', 'RIGHTBLIND', 'LEFTBLIND', 'BOTHBLIND', 'BURNPAWS', 'BURNTAIL', 'BURNBELLY', 'BEAKCHEEK', 'BEAKLOWER', 'BURNRUMP', 'CATBITE', 'RATBITE', 'FROSTFACE', 'FROSTTAIL', 'FROSTMITT', 'FROSTSOCK', 'QUILLCHUNK', 'QUILLSCRATCH', 'TAILSCAR', 'SNOUT', 'CHEEK', 'SIDE', 'THROAT', 'TAILBASE', 'BELLY', 'TOETRAP', 'SNAKE', 'LEGBITE', 'NECKBITE', 'FACE', 'HINDLEG', 'BACK', 'QUILLSIDE', 'SCRATCHSIDE', 'TOE', 'BEAKSIDE', 'CATBITETWO', 'SNAKETWO', 'FOUR', 'LEFTEAR', 'RIGHTEAR', 'NOTAIL', 'NOLEFTEAR', 'NORIGHTEAR', 'NOEAR', 'HALFTAIL', 'NOPAW'];

const tints = ['pink', 'gray', 'red', 'black', 'orange', 'yellow', 'purple', 'blue', 'none', 'dilute', 'warmdilute', 'cooldilute'];

const skins = ['BLACK', 'RED', 'PINK', 'DARKBROWN', 'BROWN', 'LIGHTBROWN', 'DARK', 'DARKGREY', 'GREY', 'DARKSALMON', 'SALMON', 'PEACH', 'DARKMARBLED', 'MARBLED', 'LIGHTMARBLED', 'DARKBLUE', 'BLUE', 'LIGHTBLUE'];

const whitePatchesTints = ['darkcream', 'cream', 'offwhite', 'gray', 'pink', 'none'];

const newbornPoses = ['newborn0', 'newborn1', 'newborn2'];

const kittenPoses = ['kitten0', 'kitten1', 'kitten2'];

const adolescentPoses = ['adolescent0', 'adolescent1', 'adolescent2'];



const seniorPoses = ['senior0', 'senior1', 'senior2'];

const paraAdultPoses = ['para_adult_short0', 'para_adult_long0'];

const adultPoses = ['adult_short0', 'adult_short1', 'adult_short2', 'adult_long0', 'adult_long1', 'adult_long2'];

const genders = ['female', 'male'];

const backstories = ['clan_founder', 'clan_guide1', 'clan_guide2', 'clan_guide3', 'clan_guide4', 'clan_guide5', 'clan_guide6', 'clan_guide7', 'clanborn', 'outsider_roots1', 'outsider_roots2', 'halfclan1', 'halfclan2', 'loner1', 'loner2', 'loner3', 'loner4', 'refugee2', 'tragedy_survivor4', 'guided3', 'wandering_healer2', 'rogue1', 'rogue2', 'rogue3', 'refugee4', 'tragedy_survivor2', 'guided2', 'wandering_healer1', 'kittypet1', 'kittypet2', 'kittypet3', 'kittypet4', 'refugee3', 'tragedy_survivor3', 'guided1', 'refugee6', 'otherclan1', 'otherclan2', 'otherclan3', 'otherclan4', 'ostracized_warrior', 'disgraced1', 'disgraced2', 'disgraced3', 'retired_leader', 'refugee1', 'tragedy_survivor1', 'medicine_cat', 'guided4', 'refugee5', 'stolenkit1', 'orphaned1', 'orphaned2', 'orphaned3', 'orphaned4', 'orphaned5', 'orphaned6', 'abandoned1', 'abandoned2', 'abandoned3', 'abandoned4', 'outsider1', 'outsider2', 'outsider3'];

const traits = ['troublesome', 'lonesome', 'fierce', 'bloodthirsty', 'cold', 'childish', 'playful', 'charismatic', 'bold', 'daring', 'nervous', 'righteous', 'insecure', 'strict', 'compassionate', 'thoughtful', 'ambitious', 'confident', 'adventurous', 'calm', 'careful', 'faithful', 'loving', 'loyal', 'responsible', 'shameless', 'sneaky', 'strange', 'vengeful', 'wise', 'arrogant', 'competitive', 'grumpy', 'cunning', 'oblivious', 'gloomy', 'sincere', 'flamboyant', 'rebellious', 'unruly', 'shy', 'impulsive', 'bullying', 'attention-seeker', 'daydreamer', 'charming', 'fearless', 'skittish', 'quiet', 'self-conscious', 'know-it-all', 'sweet', 'polite', 'bossy', 'noisy'];

const peltLengths = ['short', 'medium', 'long'];

const skills = ['TEACHER', 'HUNTER', 'FIGHTER', 'RUNNER', 'CLIMBER', 'SWIMMER', 'SPEAKER', 'MEDIATOR', 'CLEVER', 'INSIGHTFUL', 'SENSE', 'KIT', 'STORY', 'LORE', 'CAMP', 'HEALER', 'STAR', 'DARK', 'OMEN', 'DREAM', 'CLAIRVOYANT', 'PROPHET', 'GHOST'];