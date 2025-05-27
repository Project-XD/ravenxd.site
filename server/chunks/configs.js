const getConfigById = (id) => configs.find((c) => c.id === id);
const searchConfigs = (query) => {
  return configs;
};
const configs = [
  {
    id: 1,
    name: "under BMC",
    creator: "pzuo",
    updated: "10/6/2024",
    tags: ["Blatant", "BlocksMC", "recommended"],
    anticheat: ["Verus", "Updated NCP"],
    description: ["Semi blatant, everything bypasses, low/high ping support, and lasts 25-40mins!<b><br />BedAura - V<br />ChestStealer & InvManager - P<br />Gui - END<br />KillAura - R<br />Scaffold - LALT<br />Speed - X<br />Antivoid : U</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/ravenxd.site/master/static/icons/BlocksMC.png",
    ip: "play.BlocksMC.com",
    downloadLink: "https://github.com/user-attachments/files/17270291/BlocksMC-under.json",
    otherButtons: [["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
      text: "#000000",
      // Text
      accent: "#36fff5",
      // Accent
      header: "#f70cf0"
      // Header
    }
  },
  {
    id: 2,
    name: "100% Legit",
    creator: "qloha",
    updated: "9/27/2024",
    tags: ["Ghost"],
    anticheat: "Any",
    description: ["100% legit, with nothing enabled.<b><br />No binds</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/ravenxd.site/master/static/icons/any.png",
    ip: "Any",
    downloadLink: "https://github.com/user-attachments/files/17238894/Legit-qloha.json",
    otherButtons: [["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
      text: "#000000",
      // Text
      accent: "#36fff5",
      // Accent
      header: "#f70cf0"
      // Header
    }
  },
  {
    id: 3,
    name: "VimeMC Pit",
    creator: "qloha",
    updated: "10/22/2024",
    tags: ["Blatant", "Ghost", "recommended"],
    anticheat: "Grim",
    description: ["Bypasses fully, no flags.<b><br />Killaura - R<br />Speed - G<br />Gui - RShift<br />All Visuals - - (minus)</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/ravenxd.site/master/static/icons/VimeMC.png",
    ip: "mc.vimemc.net",
    downloadLink: "https://github.com/user-attachments/files/17484102/VMCPit-qloha.json",
    otherButtons: [["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
      text: "#000000",
      // Text
      accent: "#36fff5",
      // Accent
      header: "#f70cf0"
      // Header
    }
  },
  {
    id: 4,
    name: "HylexMC",
    creator: "qloha",
    updated: "10/5/2024",
    tags: ["Blatant", "Ghost", "recommended"],
    anticheat: "Grim",
    description: ["Bypasses fully, no flags.<b><br />Killaura - R<br />Speed - G<br />Velocity - V<br />Scaffold - H<br /> Bedaura - X<br />All Visuals - - (minus)</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/ravenxd.site/master/static/icons/HylexMC.png",
    ip: "play.hylexmc.com",
    downloadLink: "https://github.com/user-attachments/files/17266882/HylexMC-qloha.json",
    otherButtons: [["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
      text: "#000000",
      // Text
      accent: "#36fff5",
      // Accent
      header: "#f70cf0"
      // Header
    }
  },
  {
    id: 5,
    name: "clk BMC",
    creator: "celakk",
    updated: "11/16/2024",
    tags: ["Blatant", "recommended"],
    anticheat: ["Verus", "Updated NCP"],
    description: ["Fine tuned config for flag less gameplay. Made for skywars.<b><br />GUI - RShift<br />Killaura - Q<br />Scaffold - V<br />ChestStealer & InvManager - B<br />BedAura - H<br />Speed - Z</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/ravenxd.site/master/static/icons/BlocksMC.png",
    ip: "BlocksMC.com",
    downloadLink: "https://github.com/user-attachments/files/17787558/BlocksMC-clk.json",
    otherButtons: [["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
      text: "#000000",
      // Text
      accent: "#36fff5",
      // Accent
      header: "#f70cf0"
      // Header
    }
  },
  {
    id: 6,
    name: "VimeMC - Pit",
    creator: "pzuo",
    updated: "10/11/2024",
    tags: ["Ghost", "Blatant", "recommended"],
    anticheat: ["Grim"],
    description: ["Mainly for 150~ ping with staff on. Has four block long reach.<b><br />Killaura - R<br />Speed - X<br />GUI - RShift</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/ravenxd.site/master/static/icons/VimeMC.png",
    ip: "mc.vimemc.net",
    downloadLink: "https://github.com/user-attachments/files/17348121/VimeMCPit-under.json",
    otherButtons: [["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
      text: "#000000",
      // Text
      accent: "#36fff5",
      // Accent
      header: "#f70cf0"
      // Header
    }
  },
  {
    id: 7,
    name: "Pika",
    creator: "pzuo",
    updated: "10/22/2024",
    tags: ["Ghost", "Blatant", "recommended"],
    anticheat: ["Polar"],
    description: ["Killaura sometimes flags.<b><br />Killaura - R<br />Speed - X<br />Scaffold - RMenu</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/ravenxd.site/master/static/icons/pika.png",
    ip: "play.pika-network.net",
    downloadLink: "https://github.com/user-attachments/files/17484130/Pika-under.json",
    otherButtons: [["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
      text: "#000000",
      // Text
      accent: "#36fff5",
      // Accent
      header: "#f70cf0"
      // Header
    }
  },
  {
    id: 8,
    name: "Stardix",
    creator: "qloha",
    updated: "11/3/2024",
    tags: ["Blatant", "recommended"],
    anticheat: ["Old Grim"],
    description: ["Good bypasses. Make sure you are using the latest version of Raven XD with the updated StaffDetector to avoid possible staff bans. You can get my dev build at here: https://www.file.io/BJ1r/download/Hs7CNEna5nGr <b><br />KillAura & Criticals - R<br />Speed - G<br />Scaffold - H<br />Velocity - V<br />NoFall - N<br />Fly & Blink - F<br />Visuals - Minus<br />BedAura - X<br />BedDefender - Z</b>"],
    cover: "https://raw.githubusercontent.com/Project-XD/ravenxd.site/master/static/icons/stardix.png",
    ip: "play.stardix.com",
    downloadLink: "https://github.com/user-attachments/files/17610806/Stardix-qloha.json",
    otherButtons: [["https://adfoc.us/serve/sitelinks/?id=271228&url=https://maven.minecraftforge.net/net/minecraftforge/forge/1.8.9-11.15.1.2318-1.8.9/forge-1.8.9-11.15.1.2318-1.8.9-installer.jar", "Download Forge"], ["https://bstlar.com/3AL/Raven-XD", "Download Raven XD"]],
    colors: {
      text: "#000000",
      // Text
      accent: "#36fff5",
      // Accent
      header: "#f70cf0"
      // Header
    }
  }
];
export {
  getConfigById as g,
  searchConfigs as s
};
