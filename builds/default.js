module.exports = {
    board_env: "mega2560",
    min_version: "2.1.2",
    only: "stable",
    meta: {
        stable_name: "sovol_05_-{{marlin_version}}-default-{{uid}}",
        nightly_name: "sovol_05_-{{current_date}}-default-{{uid}}",
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Sovol/SV-05",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    }
};
