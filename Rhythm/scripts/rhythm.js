// This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

// correct rhythm time
let correctRhythmOld = [52.36383112588501, 52.77960116021728, 53.25816308583069, 53.76348812779236, 54.23459901144409, 54.714599030517576, 55.14761504577637, 55.596081, 56.08726686457825, 56.533136087738036, 57.02762397329712, 57.47524894850159, 57.914761078201295, 58.35584504196167, 58.82904304005432, 59.28321708773804, 59.73969819836426, 60.18078085122681, 60.658256015258786, 61.132151085830685, 61.61117679400635, 62.08311391607666, 62.53904015068054, 63.004227919891356, 63.43622784169006, 63.906879921798705, 64.36525705340576, 64.83597015449524, 65.28388903623963, 65.74009412588501, 66.19609397711181, 66.66053496376037, 67.099596, 67.54626002670288, 68.00272620980834, 68.47665994850159, 68.91491600572205, 69.33816503051757, 69.79517188174438, 70.22721496948242, 70.65931389128113, 71.10774989700317, 71.58023996757507, 72.02540597329713, 72.45940598855591, 72.89196207629395, 73.339357082016, 73.7886639847412, 74.17266404768371, 74.59715097901916, 75.06781602861022, 75.49879895040894, 75.95573089509583, 76.39517895231629, 76.82814094659423, 77.30067292370606, 77.72468494850159, 78.16002487030029, 78.61195801144409, 79.06097998664856, 79.47587887602234, 79.93187896566772, 80.36366403242492, 80.78771498474121, 81.19608512207031, 81.62023914686584, 82.09195995803833, 82.54790097520447, 82.99689178446961, 83.43889193515015, 83.85321596948242, 84.28526705722047, 84.73886103242492, 85.15003590081787, 85.60390389700318, 86.08373391607665, 86.49978595040893, 86.93222713160705, 87.37094790844726, 87.80370001716614, 88.2662850553131, 88.69728504959106, 89.13999698283386, 89.5641040076294, 90.02075695231629, 90.42792301716614, 90.87149900190735, 91.29111786076355, 91.71851414495849, 92.1380412002716, 92.60332211444091, 93.0519989961853, 93.51545191035461, 93.9384520076294, 94.36369395994568, 94.7789269217987, 95.25265404386901, 95.68449282070922, 96.13238415830993, 96.58920586457825, 97.02092395231628, 97.46787197901916, 97.92305112016297, 98.363468125885, 98.78807105722046, 99.26820093133544, 99.70068599809265, 100.16640800572205, 100.61937016784668, 101.06798917356872, 101.50865810681152, 101.96365386457825, 102.4075179217987, 102.85970501144409, 103.30706211062622, 103.77269787983704, 104.24280698092652, 104.73860095994569, 105.20260094659425, 105.64379393133545, 106.10038011444092, 106.5508541411438, 107.00314004386902, 107.44314010108948, 107.8917570038147, 108.35723615640259, 108.83584984359742, 109.2676851487732, 109.73138506294251, 110.19579912207031, 110.69966392561341, 111.14761604577637, 111.6536149217987, 112.10826906294251, 112.5473221411438, 112.98839593896484, 113.43543398664856, 113.86013508392334, 114.3238030705719, 114.78703498474121, 115.23555101144409, 115.69282402861023, 116.15665408773803, 116.61894105340576, 117.08239896757507, 117.5877429370575, 118.0991608550415, 118.53927491226196, 119.0385500782013, 119.4922450743866, 119.98009204196167, 120.46014808201599, 120.96560010299683, 121.4284319961853, 121.88367410681153, 122.32360099809266, 122.80419808964538, 123.25988894087219, 123.71488910299682, 124.09996078256225, 124.5480591411438, 124.97973596948242, 125.3957358588562, 125.8523588035431, 126.29847183024597, 126.7802840667572, 127.28436196376038, 127.75572506484986, 128.20411894659424, 128.6757649961853, 129.11677090844728, 129.58867703051757, 130.04481609918213, 130.5477740476837, 131.0200260038147, 131.4670260305176, 131.961428082016, 132.47567211444093, 132.93155096566772, 133.40356908773805, 133.89139088937378, 134.3406148855591, 134.81959302861023, 135.27496697329713, 135.75564991989137, 136.2353101049042, 136.68335013160706, 137.1550509732971, 137.61194593896485, 138.05968003814698, 138.52529497329712, 138.9632949370575, 139.4048740152588, 139.85882684550475, 140.33951495803834, 140.82785994659423, 141.2758230667572, 141.724548, 142.18808991416932, 142.64385516975403, 143.09151410299683,  143.4768481144409,  144.01185494087218,  144.42785506866454,  144.89299993133545,  145.31489608010864,  145.7486807844696,  146.19652514305116,  146.65131399427796,  147.11622288746642,  147.56339791416931,  148.01953902479553,  148.45198694659425,  148.88382015830993,  149.2840388703003,  149.7239670934601,  150.18096711062623,  150.63564596185302,  151.0519519961853,  151.49387590844728,  151.94687597711183,  152.39463107629393,  152.81983304959107,  153.25945903433228,  153.71548288555908,  154.17932618310547,  154.64273293133544,  155.05979898664856,  155.47604787602234,  155.90003619073485,  156.33968703051758,  156.8281301850128,  157.2599060343323,  157.67601992370606,  158.1082350629425,  158.54700488174439,  159.004371043869,  159.46837103051757,  159.8750960228882,  160.27572513923644,  160.71569088555907,  161.17214297520448,  161.61259395994568,  162.05179308964537,  162.4840310629425,  162.89103112779236,  163.33444782261657,  163.75469191989137,  164.1975870705719,  164.66038581880187,  165.07635799809265,  165.51639198283385,  165.9473919771118,  166.39550602479554,  166.81935597711183,  167.22758711444092,  167.69082902861024,  168.11529898092653,  168.54782688174438,  168.97858489700317,  169.41969988174438,  169.85267402098083,  170.29204500572206,  170.7070449675751,  171.16568400572206,  171.6285099923706,  172.0353848703003,  172.4839330629425,  172.9245719961853,  173.36370893896483,  173.7953947882843,  174.22723911444092,  174.65977896376037,  175.106809917984,  175.54740280926515,  175.9959939294281,  176.41188398474122,  176.85983099046325,  177.37059709536743,  177.8130111525879,  178.27597790081788,  178.72381502098082,  179.1724419027252,  179.62969697138976,  180.099803,  180.54900397520447,  181.01103386839296,  181.47546594850158,  181.96446603051757,  182.39475702479552,  182.83641000953673,  183.3014298512268,  183.74815000190736,  184.17914999618532,  184.6286601373291,  185.05971913160707,  185.49212990844725,  185.94134019454955,  186.39535693133544,  186.8462701449585, 187.27547419073485,  187.71447408201598,  188.1636809847412,  188.60592799046324,  189.0755920190735,  189.4723668550415,  189.9156909332428,  190.36383088746643,  190.82014902861022,  191.22734904196167,  191.69174093515014,  192.1342069408722,  192.5829799885559,  193.01184003433227,  193.445970956131,  193.86775198092653,  194.32529514305114,  194.74057295994567,  195.16357281880187,  195.5641070076294,  196.0369479847412,  196.45980584359742,  196.88410886839296,  197.28572381880187,  197.7478630743866,  198.18686296566773,  198.69265810108948,  199.09264781307982,  199.53223994277954,  199.98068999046325,  200.41969888174438,  200.84509390653992,  201.3157651525879,  201.75626891989137,  202.19626897711183,  202.61114993896484,  203.06861204959105,  203.4838911564026,  203.94089117356873,  204.3876400553131,  204.86099693896483,  205.30833589318848,  205.77277802479554,  206.21251500953673,  206.65234599427797,  207.08449089509583,  207.53886491226197,  207.96386510299683,  208.42683890272522,  208.87632004386901,  209.325787164032,  209.8838699408722,  210.3073659656677,  210.85344913542176,  211.33067589509582,  211.7879039847412,  212.22853613542176,  212.68480096566773,  213.14878687983705,  213.6205869294281,  214.0764401850128,  214.5717289771118,  215.02883999427794,  215.4596779885559,  215.8999849732971,  216.32524099809265,  216.76501198283387,  217.1969300705719,  217.6398291487732,  218.1235649294281,  218.5716910705719,  219.0195580038147,  219.44362688365175,  219.89208598283386,  220.32488099809265,  220.75521991989135,  221.21251710299683,  221.6530120667572,  222.0839161335144,  222.5161628893738,  222.9766769485016,  223.42097502670288,  223.85915808392335,  224.2849091296997,  224.71637103051756,  225.1553971811981,  225.57319490463257,  225.98767819836425,  226.44365088365174,  226.91822000572205,  227.38062491989135,  227.82820811253356,  228.26771907629396,  228.69947909155275,  229.22021790653992,  229.6991369771118,  230.1960091220703,  230.68379096566773,  231.1155158149872,  231.58881503051757, 232.05287801716614, 232.5478001411438, 233.01254996185304, 233.460235082016, 233.91806800572203, 234.3812989923706, 234.82063797711183, 235.2601299408722, 235.71513010299682, 236.19556102861023, 236.65221590081788, 237.08378496757507, 237.53227194277954, 238.01870807629393, 238.45970806103514, 238.90810994277953, 239.34766309346008, 239.81230591416931, 240.24462100190735, 240.70856096757507, 241.14046998283385, 241.59883902098085, 242.0596120591278, 242.48327091798402, 242.91685100572204, 243.41106396376037, 243.84389314495849, 244.28404003623962, 244.73148999046325, 245.14767195231627, 245.6033319694824, 246.06839804959105, 246.49157088746642, 246.9405710076294, 247.4195691926422, 247.82869709155273, 248.25162611634826, 248.68262611062622, 249.10686699046326, 249.56437317356873, 250.03457501525878, 250.52330195231627, 250.98744001144408, 251.39443983787535, 251.8168398626709, 252.2917181716614, 252.7074889885559, 253.15569994277953, 253.6127159599457, 254.06915104959106, 254.5082619923706, 254.95726211253356, 255.45180601907347, 255.89998097329712, 256.3408171239777, 256.7555369923706, 257.2119248226166, 257.6521299008179, 258.07832809155275, 258.52507504577636, 258.97966313542173, 259.4436631220703, 259.8589940114441, 260.29145909918213, 260.7155560305176, 261.1883389141693, 261.629147043869, 262.0675121945496, 262.50152980545045, 262.9326022040863, 263.39707409727475, 263.8200720495911, 264.2275758550415, 264.6516870667572, 265.06741417356875, 265.51630112779236, 265.97959396948244, 266.46762405149843, 266.88440501335145, 267.2915300991821, 267.7079799885559, 268.15644394277956, 268.58030901907347, 269.0190940972748, 269.4758991869202, 269.91598900572205, 270.3311131335144, 270.7637518893738, 271.1957518111725, 271.6499021182556, 272.0776349256134, 272.5104319408722, 272.9164318397827, 273.3732750228882, 273.7896160782013, 274.24373200190735, 274.6707190991821, 275.1086300114441, 275.54784888174436, 275.98182296948244, 276.4046860152588, 276.8126881525879, 277.2128091754761, 277.66028320217896, 278.10844696948243, 278.54869897520445, 278.97887378256223, 279.4278739027252, 279.83594091607665, 280.2905338397827, 280.7155340305176, 281.1558300152588, 281.588549082016, 282.05182708964537, 282.4750969275207, 282.9089100152588, 283.3396780305176, 283.7716289523163, 284.22062907247926, 284.6461989523163, 285.07648409155274, 285.51538598283383, 285.9948979294281, 286.47883387602235, 286.8830948474121, 287.3310972059937, 287.7748869008179, 288.2119939370575, 288.6202659809265, 289.08561500953675, 289.50885691989134, 289.93919798664854, 290.3796249923706, 290.8279950190735, 291.2603581068115, 291.7062531335144, 292.1799019446869, 292.66082420217896, 293.1571529217987, 293.61168417738344, 294.0597840591278, 294.4982970228882, 294.9897260534058, 295.45172594659425, 295.876217043869, 296.3637158874664, 296.83793386457825, 297.3026020171661, 297.7376849599457, 298.1878710076294, 298.6169299084473, 299.0771429465942, 299.47576992752073, 299.92380583024595, 300.3562760419617, 300.8114029141693, 301.2419320534058, 301.7475180228882, 302.1794539446869, 302.6603168912811, 303.084567082016, 303.5476399027252, 303.9867260839233, 304.4276050896454, 304.9163790782013, 305.4035209942779, 305.8844148683929, 306.37270000190733, 306.86819383596804, 307.39584293133544, 308.13258215830996, 308.6281389713898, 309.17937194468686];

const confidenceIntervals = [0.20788501716613794, 0.23928096280670275, 0.2526625209808344, 0.2355554418258663, 0.24000000953674316, 0.21650800762939681, 0.22423297711181434, 0.24559293228912438, 0.2229346115798947, 0.24724394277954076, 0.2238124876022347, 0.21975606484985377, 0.2205419818801886, 0.23659899904632553, 0.22708702384185742, 0.2282405553131106, 0.2205413264312739, 0.2387375820159896, 0.23694753528594958, 0.23951285408783107, 0.23596856103515762, 0.22796311730193963, 0.2325938846054072, 0.21599996089935303, 0.23532604005432134, 0.22918856580352553, 0.23535655054474347, 0.22395944087219277, 0.22810254482268988, 0.22799992561340332, 0.2322204933242773, 0.21953051811981794, 0.22333201335143826, 0.22823309155273108, 0.2369668693466238, 0.2191280286102284, 0.21162451239776203, 0.22850342561340398, 0.21602154386901873, 0.21604946089935595, 0.22421800286102211, 0.23624503528594687, 0.22258300286102894, 0.21700000762939453, 0.21627804386901772, 0.22369750286102175, 0.22465345136260595, 0.19200003147125244, 0.21224346566772567, 0.23533252479553113, 0.2154914608993579, 0.228465972343443, 0.21972402861023, 0.21648099713897295, 0.23626598855591396, 0.21200601239776518, 0.2176699608993502, 0.22596657057189873, 0.22451098760223687, 0.20744944468688686, 0.22800004482269287, 0.21589253337860015, 0.21202547615814638, 0.20418506866455033, 0.21207701239776355, 0.23586040558624433, 0.2279705085830699, 0.22449540463257023, 0.221000075340271, 0.2071620171661337, 0.21602554386902284, 0.22679698760222777, 0.20558743419647385, 0.22693399809265458, 0.2399150095367375, 0.20802601716614078, 0.21622059059905752, 0.21936038842010674, 0.2163760543594364, 0.23129251907348447, 0.21549999713897705, 0.22135596662140244, 0.21205351239776604, 0.22832647234344705, 0.20358303242492326, 0.22178799237060787, 0.20980942942809833, 0.21369814209747062, 0.20976352765655548, 0.2326404570846563, 0.22433844087219512, 0.23172645708465467, 0.21150004863739014, 0.21262097615814213, 0.20761648092651086, 0.2368635610351575, 0.2159193884201045, 0.22394566880035427, 0.22841085313415732, 0.2158590438690169, 0.22347401335144212, 0.22758957057190088, 0.2202085028610199, 0.21230146566772845, 0.24006493705748966, 0.21624253337860466, 0.23286100381469765, 0.22648108106231746, 0.22430950286101847, 0.22033446662140221, 0.22749787888336215, 0.22193202861022598, 0.22609354482269595, 0.2236785495910638, 0.23281788460541009, 0.23505455054473856, 0.2478969895095844, 0.23199999332427979, 0.22059649237060341, 0.22829309155273592, 0.22523701335143897, 0.2261429513626112, 0.2200000286102295, 0.22430845136261013, 0.2327395762939446, 0.2393068435974115, 0.21591765258789053, 0.2318499570846555, 0.23220702956390227, 0.25193240177154763, 0.2239760600814833, 0.252999438011166, 0.22732707057190282, 0.21952653910064157, 0.22053689891052386, 0.22351902384185962, 0.21235054863738867, 0.23183399332427967, 0.23161595708465654, 0.22425801335143802, 0.22863650858307238, 0.23191502956390053, 0.23114348283386477, 0.23172895708465546, 0.25267198474121244, 0.2557089589920025, 0.2200570286102277, 0.24963758296966887, 0.2268474980926527, 0.24392348378753326, 0.24002802002716095, 0.2527260104904201, 0.23141594659423248, 0.22762105531311505, 0.21996344564056614, 0.240298545776362, 0.2278454256134026, 0.2275000810623169, 0.19253583978271394, 0.22404917929077328, 0.21583841416931193, 0.20799994468688965, 0.2283114723434494, 0.2230565133514375, 0.2409061182556158, 0.2520389485015855, 0.23568155054474005, 0.22419694087219, 0.23582302479553618, 0.2205029561309857, 0.23595306103514702, 0.2280695343322776, 0.25147897425078725, 0.23612597806550184, 0.22350001335144043, 0.24720102574920588, 0.2571220162124632, 0.22793942561339975, 0.23600906103516195, 0.24391090081786615, 0.22461199809265509, 0.23948907152556842, 0.2276869723434487, 0.2403414732971214, 0.2398300925064092, 0.22402001335143495, 0.2358504208450256, 0.22844748283387162, 0.22386704959106396, 0.23280746757507131, 0.218999981880188, 0.22078953910065025, 0.2269764151229765, 0.24034405626679245, 0.2441724942779473, 0.22398156008148362, 0.22436246662140036, 0.2317709570846631, 0.22788262779235424, 0.22382946662139602, 0.19266700572204343, 0.26750341321563553, 0.2080000638961792, 0.23257243133545558, 0.21094807438659302, 0.21689235218047997, 0.2239221792907813, 0.2273944256133973, 0.23245444659423242, 0.2235875133514469, 0.22807055531310994, 0.21622396089935592, 0.21591660585784211, 0.2001093559951812, 0.21996411157989826, 0.22850000858306885, 0.22733942561339404, 0.20815301716613988, 0.22096195613099212, 0.2265000343322754, 0.22387754959105166, 0.2126009866485674, 0.21981299237060625, 0.22801192561340144, 0.231921648773195, 0.23170337411498565, 0.20853302765655712, 0.20812444468688795, 0.21199415735625848, 0.2198254198913645, 0.24422157724761462, 0.21588792465973938, 0.20805694468688785, 0.21610756961821664, 0.21938490940094368, 0.2286830810623144, 0.23199999332427979, 0.20336249618530644, 0.2003145581741279, 0.21998287316131382, 0.22822604482270492, 0.22022549237060218, 0.2195995648498439, 0.2161189866485671, 0.20350003242492676, 0.221708347412104, 0.2101220486374018, 0.22144757534026382, 0.2313993741149858, 0.207986089645388, 0.2200169923706028, 0.21549999713897705, 0.22405702384186554, 0.21192497615814432, 0.20411556866454816, 0.23162095708465813, 0.21223497615814324, 0.21626395040892987, 0.21537900762939444, 0.2205574923706024, 0.21648706961822484, 0.21968549237061552, 0.20749998092651367, 0.2293195190734849, 0.23141299332426968, 0.20343743896485478, 0.2242740963210963, 0.22031946662140456, 0.21956847138976343, 0.2158429246597393, 0.2159221630783037, 0.21626992465972705, 0.22351547711181752, 0.22029644564057094, 0.22429556008147244, 0.20794502765656375, 0.22397350286101414, 0.25538305245208903, 0.22120702861023744, 0.23148337411498687, 0.22391856008147215, 0.2243134408721943, 0.22862753433227567, 0.23505301430512304, 0.22460048760223117, 0.23101494659424304, 0.23221604005431118, 0.2445000410079956, 0.2151454971389768, 0.22082649237060537, 0.23250992084503252, 0.22336007534028113, 0.21549999713897705, 0.22475507057188793, 0.21552949713898784, 0.21620538842009296, 0.22460514305114998, 0.22700836839294425, 0.2254566068115338, 0.21460202288817243, 0.21949994564056396, 0.2246034513626114, 0.221123502861019, 0.2348320143051268, 0.1983874179840086, 0.22166203910063587, 0.22406997711182441, 0.22815907057189122, 0.2036000066757282, 0.23219594659423137, 0.22123300286102676, 0.22438652384185787, 0.21443002288818036, 0.21706546089936296, 0.2108905123977678, 0.2287715810623041, 0.20763890844726518, 0.21149992942810059, 0.20026709441376056, 0.23642048855590758, 0.2114289294281093, 0.2121515123977673, 0.2008074752044564, 0.2310696277923654, 0.21949994564056396, 0.2528975677108747, 0.19999485599517186, 0.21979606484985936, 0.2242250238418535, 0.21950444564056681, 0.21269751239776724, 0.23533562302398536, 0.2202518836517413, 0.2200000286102295, 0.20744048092650758, 0.228731055313105, 0.20763955340576956, 0.22850000858306885, 0.22337444087219183, 0.23667844182585895, 0.2236694771118266, 0.23222106580352886, 0.21986849237059403, 0.21991549237061747, 0.2160724504089302, 0.22718700858307272, 0.21250009536743164, 0.23148689986419413, 0.22474057057189611, 0.22473356008148926, 0.2790413884200973, 0.21174801239776286, 0.2730415848770207, 0.2386133798370338, 0.22861404482269165, 0.22031607534027842, 0.22813241512298532, 0.23199295708465684, 0.23590002479552652, 0.22792662779235684, 0.24764439604949473, 0.22855550858307083, 0.2154189971389826, 0.22015349237059922, 0.21262801239777218, 0.21988549237060795, 0.2159590438690202, 0.22144953910064658, 0.24186789032745537, 0.22406307057188712, 0.22393346662140345, 0.21203443991852566, 0.22422954959105823, 0.21639750762939514, 0.21516946089934663, 0.22864859155274075, 0.22024748188019316, 0.21545203337859675, 0.21612337792969072, 0.23025702956390148, 0.22214903910064265, 0.2190915286102353, 0.2128755228881829, 0.21573095040892554, 0.21951307534027364, 0.2088988617172305, 0.2072416468658389, 0.22798634264374584, 0.23728456103515327, 0.23120245708464893, 0.22379159632110657, 0.219755481880199, 0.2158800076293943, 0.2603694074935845, 0.23945953528594544, 0.24843607247925092, 0.24389092179870886, 0.2158624246597327, 0.2366496077651874, 0.23203149332428552, 0.24746106198882956, 0.232374910354622, 0.2238425600814793, 0.22891646185301795, 0.23161549332428422, 0.21966949237061328, 0.21974598188018035, 0.2275000810623169, 0.24021546280670236, 0.22832743610382522, 0.2157845333785957, 0.22424348760223722, 0.24321806675719415, 0.22049999237060547, 0.2242009408721941, 0.21977657534027628, 0.23232141035461495, 0.21615754386901642, 0.23196998283385994, 0.21595450762939095, 0.2291845190734989, 0.23038651907347685, 0.21182942942810712, 0.21679004386901113, 0.24710647901916616, 0.216414590599058, 0.22007344564056552, 0.22372497711181438, 0.20809098092651368, 0.22783000858306934, 0.23253304005432085, 0.21158641893768504, 0.22450006008148193, 0.23949909250640644, 0.20456394945526313, 0.2114645123977681, 0.21549999713897705, 0.2121204399185217, 0.2287530915527327, 0.23510092084502787, 0.24436346852874635, 0.23206902956390252, 0.2034999132156372, 0.21120001239776798, 0.23743915449524877, 0.2078854084472539, 0.22410547711182005, 0.22850800858307707, 0.22821754482268375, 0.21955547138976783, 0.22450006008148193, 0.24727195326995854, 0.22408747711182286, 0.2204180753402767, 0.20735993419646093, 0.22819391512300058, 0.22010253910065103, 0.21309909536742566, 0.22337347711180655, 0.22729404482268478, 0.23199999332427979, 0.20766544468690995, 0.2162325438690118, 0.21204846566772062, 0.23639144182587302, 0.22040406484984487, 0.21918257534028385, 0.21700880545043333, 0.21553619931793833, 0.23223594659421565, 0.21149897615816826, 0.20375190272520172, 0.21205560585784156, 0.20786355340578666, 0.22444347711180512, 0.2316464208450384, 0.24401504100799798, 0.2083904809265107, 0.2035625429153356, 0.20822494468689, 0.22423197711182752, 0.21193253814695368, 0.21939253910065304, 0.22840254482269984, 0.22004490940094001, 0.2075620638961766, 0.21631937792969325, 0.21599996089935303, 0.2270751535415627, 0.21386640367887821, 0.21639850762940682, 0.20299994945526123, 0.22842159155274544, 0.20817052765653443, 0.22705796185303484, 0.21349354863738768, 0.21895545613099898, 0.21960943515011877, 0.21698704386903955, 0.21143152288817646, 0.20400106866455303, 0.20006051144409298, 0.22373701335143892, 0.22408188365173487, 0.22012600286100792, 0.21508740367889345, 0.22450006008148193, 0.20403350667572795, 0.22729646185302954, 0.21250009536743164, 0.2201479923706131, 0.2163595333786077, 0.23163900381467784, 0.21163491893767628, 0.21690654386904384, 0.2153840076293818, 0.21597546089935804, 0.22450006008148193, 0.21278493991852088, 0.21514256961822298, 0.21945094564054557, 0.23975597329712173, 0.24196797329713604, 0.20213048569488024, 0.22400117929078078, 0.22189484741210208, 0.21855351811981905, 0.2041360219344881, 0.2326745143051312, 0.2116209551772954, 0.21517053337859693, 0.2202135028610428, 0.2241850133514447, 0.21618154386899846, 0.2229475133514427, 0.23682440558624762, 0.2404611287460341, 0.24816435980986284, 0.22726562779237724, 0.22404994087219166, 0.2192564818801941, 0.24571451525878274, 0.23099994659423828, 0.21224554863738376, 0.24374942179869663, 0.23710898855591722, 0.2323340762939381, 0.21754147138977942, 0.22509302384185048, 0.21452945040894633, 0.23010651907347324, 0.19931349046325408, 0.2240179513626117, 0.2162351058578622, 0.22756343610382146, 0.2152645696182276, 0.2527929847412054, 0.21596796089934855, 0.24043147329712156, 0.2121250953674405, 0.23153641035460737, 0.2195430905990463, 0.22043950286104064, 0.24438699427795996, 0.24357095803830475, 0.24044693705749864, 0.2441425667572048, 0.247746917030355, 0.2638245476836971, 0.3683696134872605, 0.2477784065399078, 0.2756164866485449];

const confidenceIntervalMean = 0.22448910910734424/2.0;

// rhythm array
let rhythmUser = [];
let rhythmUserCorrect = [];
let correctRhythm = [52.26421812969971, 52.71000091798401, 53.18187996757507, 53.64540909918213, 54.11165101335144, 54.61317603433228, 55.11055306484985, 55.548349956130984, 56.012244963760374, 56.469238032424926, 56.93223809155273, 57.364767961853026, 57.813907143051146, 58.29237600762939, 58.76483012969971, 59.23620901335144, 59.69243495803833, 60.155252996185304, 60.620415910354616, 61.08529184550476, 61.52537512016296, 61.990043816894534, 62.445055979019166, 62.900669975204465, 63.36499294087219, 63.828590855041504, 64.26846800572204, 64.74965202479554, 65.21313893896485, 65.64490483978271, 66.13454101525879, 66.5888518664856, 67.04521188365173, 67.49215591035461, 67.948156, 68.37189209727478, 68.78898284169006, 69.24474112779235, 69.70156078256225, 70.13281008773804, 70.54921190463257, 71.01331196376037, 71.45631204196167, 71.90092900572205, 72.3491649294281, 72.81338422697449, 73.23750394087219, 73.66955302861022, 74.10092195040893, 74.5328427997284, 74.97312685694885];
const confidenceIntervalsTwo = [0.22289139414215242, 0.23593952479552982, 0.23176456580353033, 0.23312095708465463, 0.25076251049041787, 0.2486885152587881, 0.2188984456405656, 0.23194750381469476, 0.228496534332276, 0.2315000295639038, 0.21626493515014644, 0.22456959059906012, 0.23923443228912333, 0.23622706103515867, 0.2356894418258655, 0.22811297234344607, 0.2314090190734852, 0.23258145708465605, 0.2324379675750734, 0.22004163732909987, 0.23233434836578581, 0.22750608106231596, 0.2278069980926496, 0.23216148283386318, 0.23179895708465637, 0.21993857534026873, 0.24059200953674775, 0.23174345708465438, 0.21588295040893257, 0.24481808773803948, 0.22715542561340385, 0.22818000858306675, 0.22347201335144007, 0.22800004482269287, 0.21186804863739184, 0.20854537220763802, 0.22787914305114754, 0.22840982738495086, 0.21562465258789132, 0.20820090844726735, 0.23205002956390075, 0.22150003910064697, 0.2223084818801908, 0.22411796185302535, 0.2321096487731964, 0.21205985694884788, 0.21602454386901826, 0.21568446089935378, 0.21596042465973397, 0.22014202861022625];
const numberCorrectRhythm = correctRhythm.length;
let correctTappedRhyhtm = 0;

// used to trigger the mute
const timestamp = 65;
let timer;

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('white_stripes', {
    height: '390',
    width: '640',
    videoId: 'wuRd1yqGDeE',
    playerVars: {
      start: '45',
      end: '75'
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  $("#introModal").modal('show');
}

function fadeOut() {
  setInterval(function() {
    if (player.getVolume() != 0) {
      player.setVolume(player.getVolume() - 1);}}, 50);
  //player.mute();
}

function timeoutFadeOut() {
  clearTimeout(timer);
  currentTime = player.getCurrentTime();
  remainingTime = timestamp - currentTime;
  if (remainingTime > 0) {
    timer = setTimeout(fadeOut, remainingTime * 1000);
  }
}

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1),
// the player should play for six seconds and then stop.
let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    timeoutFadeOut();
  } else if (event.data == YT.PlayerState.ENDED) {
    $("#score").append("You had tapped "+ rhythmUserCorrect.length +" times the correct rhythm.");
    const resultPercentage = Math.floor((correctTappedRhyhtm/numberCorrectRhythm)*100);
    $("#resultPercentage").attr("style", "width:"+ resultPercentage +"%");
    $("#resultPercentageNumeral").append(resultPercentage +"%");
    $("#resultModal").modal('show');
    console.log("Array of all rhythm tapped by the user:"+ rhythmUser);
    console.log("Array of all the correct rhythm tapped by the user:"+ rhythmUserCorrect);
    downloadResults(resultPercentage, rhythmUser, rhythmUserCorrect);
  }
}

// record each time the user press a key
$(window).keypress(function() {
  if (player.getPlayerState() == YT.PlayerState.PLAYING) {
    currentTime = player.getCurrentTime();
    rhythmUser.push(currentTime);
    if (confidenceInterval(currentTime)) {
      rhythmUserCorrect.push(currentTime);
    }
  }
});

// Play the video when the user discard the introduction modal
$("#startVideo").on('click', function() {
  player.playVideo();
});

// used to create the array confidenceInterval
// let timeInterval = "[ ";
// for (let i = 1; i < newIntervalRhythm.length; i++) {
//   interval = (newIntervalRhythm[i]-newIntervalRhythm[i-1])/2.0;
//   timeInterval = timeInterval + ", " + interval;
// }
// timeInterval = timeInterval + "]";
// $("#intervalArray").append(timeInterval);
// let sum = 0;
// for (let i = 0; i < confidenceIntervalsTwo.length; i++) {
//   sum = sum + confidenceIntervalsTwo[i];
// }
// const mean = sum / confidenceIntervalsTwo.length;
// console.log(mean);

function confidenceInterval(keypressTime) {
  for (let i = 0; i < correctRhythm.length; i++) {
    if (keypressTime <= (correctRhythm[i] + confidenceIntervalMean) && keypressTime >= (correctRhythm[i] - confidenceIntervalMean)) {
      console.log("bien");
      correctRhythm.splice(i, 1);
      correctTappedRhyhtm += 1;
      return true;
    }
  }
  console.log("pas bien");
  return false;
}

function stopVideo() {
  player.stopVideo();
}

function downloadResults(resultPercentage, rhythmUser, rhythmUserCorrect) {
  const currentTime = new Date();
  const day = currentTime.getDay();
  const month = currentTime.getMonth()+1; // January is number 0
  const year = currentTime.getFullYear();

  const jsonFile = {
      date: day +"/"+ month +"/"+ year,
      'Result %': resultPercentage,
      'Array of all the tapped rhythm': rhythmUser,
      'Array of all the correct tapped rhythm': rhythmUserCorrect
  };

  const blob = new Blob([JSON.stringify(jsonFile, null, 3)], {type: 'application/json'});

  if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
  }
  else {
      const elem = window.document.createElement('a');
      elem.href = window.URL.createObjectURL(blob);
      elem.download = "resultRhythm.json";
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
  }
}
