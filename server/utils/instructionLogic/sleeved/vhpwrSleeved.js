const sCG = require('../../sleevedCableGroups')

const vhpwrSleeved = (product) => {

    if (product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum') {
        if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O') {
            product.instructions = 'SLEEVED 12VHPWR - 300 - Corsair'
        }
        else if (product.case === 'Cooler Master NR200p MAX' || product.case === 'Lazer3D LZ7 XTD' || product.case === 'XTIA Xproto') {
            product.instructions = 'SLEEVED 12VHPWR - 360 - Corsair'
        }
        else if (product.gpuModel === 'RTX 4060 Ti' || product.gpuModel === 'RTX 4070') {
            product.instructions = 'SLEEVED 12VHPWR - 360 - Corsair'
        } else if (product.gpuModel === 'RTX 4080' || product.gpuModel === 'RTX 4070 Ti') {
            if (sCG.sleeved12PCIECaseGroupOneCorsair.includes(product.case)) {
                product.instructions = 'SLEEVED 12VHPWR - 360 - Corsair'
            } else if (sCG.sleeved12PCIECaseGroupTwoCorsair.includes(product.case)) {
                product.instructions = 'SLEEVED 12VHPWR - 300 - Corsair'
            }
        } else if (product.gpuModel === 'RTX 4090') {
            product.instructions = 'SLEEVED 12VHPWR - 400 - Corsair'
        }
    }

    else if (product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT' || product.psuModel === 'EVGA 450/550/650/750/850 GM' || product.psuModel === 'Silverstone SX800-LTI/NJ450-SXL/Lian Li PE-750') {
        if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O') {
            product.instructions = 'SLEEVED 12VHPWR - 300 - Silverstone'
        } else if (product.case === 'Cooler Master NR200p MAX' || product.case === 'Lazer3D LZ7 XTD' || product.case === 'XTIA Xproto') {
            product.instructions = 'SLEEVED 12VHPWR - 360 - Silverstone'
        } else if (product.gpuModel === 'RTX 4060 Ti' || product.gpuModel === 'RTX 4070') {
            product.instructions = 'SLEEVED 12VHPWR - 360 - Silverstone'
        } else if (product.gpuModel === 'RTX 4080' || product.gpuModel === 'RTX 4070 Ti') {
            if (uCG.unsleeved12PCIECaseGroupOne3080Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12VHPWR - 300 - Silverstone'
            } else if (uCG.unsleeved12PCIECaseGroupTwo3080Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12VHPWR - 360 - Silverstone'
            }
        } else if (product.gpuModel === 'RTX 4090') {
            if (uCG.unsleeved12PCIECaseGroupOne3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12VHPWR - 360 - Silverstone'
            } else if (uCG.unsleeved12PCIECaseGroupTwo3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12VHPWR - 400 - Silverstone'
            }
        }
    }

    else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX' || product.psuModel === 'Silverstone SX750/SX1000') {
        if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O') {
            product.instructions = 'SLEEVED 12VHPWR - 300 - Cooler Master'
        } else if (product.case === 'Cooler Master NR200p MAX' || product.case === 'Lazer3D LZ7 XTD' || product.case === 'XTIA Xproto') {
            product.instructions = 'SLEEVED 12VHPWR - 360 - Cooler Master'
        } else if (product.gpuModel === 'RTX 4060 Ti' || product.gpuModel === 'RTX 4070') {
            product.instructions = 'SLEEVED 12VHPWR - 360 - Cooler Master'
        } else if (product.gpuModel === 'RTX 4080' || product.gpuModel === 'RTX 4070 Ti') {
            if (uCG.unsleeved12PCIECaseGroupOne3080Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12VHPWR - 300 - Cooler Master'
            } else if (uCG.unsleeved12PCIECaseGroupTwo3080Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12VHPWR - 360 - Cooler Master'
            }
        } else if (product.gpuModel === 'RTX 4090') {
            if (uCG.unsleeved12PCIECaseGroupOne3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12VHPWR - 360 - Cooler Master'
            } else if (uCG.unsleeved12PCIECaseGroupTwo3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12VHPWR - 400 - Cooler Master'
            }
        }
    }
}

module.exports = vhpwrSleeved;
