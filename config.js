import Settings from "../Ameratsu/core/Settings"
import DefaultConfig from "../Ameratsu/core/DefaultConfig"

const config = new DefaultConfig("RoughingAddons", "data/settings.json")

    config
        .addSwitch({
            category: "Party",
            configName: "politekick",
            title: "Polite Kick",
            description: ""
        })

        .addSwitch({
            category: "Kuudra",
            configName: "VClip/LavaClip",
            title: "VClip",
            description: ""
        })
        

const mySettings = new Settings("RoughingAddons", config, "data/colorscheme.json").setCommand("roughingaddons", ["ra"])
export default () => mySettings.settings
