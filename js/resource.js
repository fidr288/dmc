function choice() {
  var menu = document.querySelector('input[name="menu"]:checked').value
  var menubox = document.getElementById("menu");
  var help = document.getElementById("help");
  var general = document.getElementById("general");
  var test = document.getElementById("test");
  var woman = document.getElementById("woman");
  var elderly = document.getElementById("elderly");
  var resp = document.getElementById("resp");
  var drug = document.getElementById("drug");
  var rheum = document.getElementById("rheum");
  var diabetes = document.getElementById("diabetes");
  var cardio = document.getElementById("cardio");
  var neuro = document.getElementById("neuro");
  var genetic = document.getElementById("genetic");
  var mental = document.getElementById("mental");
  var gastro = document.getElementById("gastro");
  var derm = document.getElementById("derm");
  var paed = document.getElementById("paed");
  var flu = document.getElementById("flu");
  var travel = document.getElementById("travel");
  var imm = document.getElementById("imm");
  var service = document.getElementById("service");
  var medicine = document.getElementById("medicine");
  var gov = document.getElementById("gov");
  var screening = document.getElementById("screening");
  var men = document.getElementById("men");
  var allergy = document.getElementById("allergy");
  var cancer = document.getElementById("cancer");
  help.style.display = "none";
  general.style.display = "none";
  test.style.display = "none";
  woman.style.display = "none";
  elderly.style.display = "none";
  resp.style.display = "none";
  drug.style.display = "none";
  rheum.style.display = "none";
  diabetes.style.display = "none";
  cardio.style.display = "none";
  neuro.style.display = "none";
  genetic.style.display = "none";
  mental.style.display = "none";
  gastro.style.display = "none";
  derm.style.display = "none";
  paed.style.display = "none";
  flu.style.display = "none";
  travel.style.display = "none";
  imm.style.display = "none";
  service.style.display = "none";
  medicine.style.display = "none";
  gov.style.display = "none";
  screening.style.display = "none";
  men.style.display = "none";
  allergy.style.display = "none";
  cancer.style.display = "none";
  switch (menu) {
    case "help":
    help.style.display = "block";
    menubox.style.display ="none";
    break;
    case "general": 
    general.style.display = "block";
    menubox.style.display ="none";
    break;
    case "test":
    test.style.display = "block";
    menubox.style.display ="none";
    break;
    case "woman":
    woman.style.display = "block";
    menubox.style.display ="none";
    break;
    case "elderly":
    elderly.style.display = "block";
    menubox.style.display ="none";
    break;
    case "resp":
    resp.style.display = "block";
    menubox.style.display ="none";
    break;
    case "drug":
    drug.style.display = "block";
    menubox.style.display ="none";
    break;
    case "rheum":
    rheum.style.display = "block";
    menubox.style.display ="none";
    break;
    case "diabetes":
    diabetes.style.display = "block";
    menubox.style.display ="none";
    break;
    case "cardio":
    cardio.style.display = "block";
    menubox.style.display ="none";
    break;
    case "neuro":
    neuro.style.display = "block";
    menubox.style.display ="none";
    break;
    case "genetic":
    genetic.style.display = "block";
    menubox.style.display ="none";
    break;
    case "mental":
    mental.style.display = "block";
    menubox.style.display ="none";
    break;
    case "gastro":
    gastro.style.display = "block";
    menubox.style.display ="none";
    break;
    case "derm":
    derm.style.display = "block";
    menubox.style.display ="none";
    break;
    case "paed":
    paed.style.display = "block";
    menubox.style.display ="none";
    break;
    case "flu":
    flu.style.display = "block";
    menubox.style.display ="none";
    break;
    case "travel":
    travel.style.display = "block";
    menubox.style.display ="none";
    break;
    case "imm":
    imm.style.display = "block";
    menubox.style.display ="none";
    break;
    case "service":
    menubox.style.display ="none";
    service.style.display = "block";
    break;
    case "medicine":
    medicine.style.display = "block";
    menubox.style.display ="none";
    break;
    case "gov":
    gov.style.display = "block";
    menubox.style.display ="none";
    break;
    case "men":
    men.style.display = "block";
    menubox.style.display ="none";
    break;
    case "allergy":
    allergy.style.display = "block";
    menubox.style.display ="none";
    break;
    case "cancer":
    cancer.style.display = "block";
    menubox.style.display ="none";


  }
  
}