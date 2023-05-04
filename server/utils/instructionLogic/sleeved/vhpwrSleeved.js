const vhpwrSleeved = (product) => {
    if (product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum') {
        if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O') {
            product.instructions = 'SLEEVED 12 Pin - 300 - Corsair'
        }
        else if (product.case === 'Cooler Master NR200p MAX' || product.case === 'Lazer3D LZ7 XTD' || product.case === 'XTIA Xproto') {
            product.instructions = 'SLEEVED 12 Pin - 360 - Corsair'
        }
        else if (product.gpuModel === 'RTX 3060 Ti Founders Edition' || product.gpuModel === 'RTX 3070 Founders Edition') {
            product.instructions = 'SLEEVED 12 Pin - 360 - Corsair'
        } else if (product.gpuModel === 'RTX 3080/3070 Ti/3080 Ti Founders Edition') {
            if (sCG.sleeved12PCIECaseGroupOneCorsair.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 360 - Corsair'
            } else if (sCG.sleeved12PCIECaseGroupTwoCorsair.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 300 - Corsair'
            }
        } else if (product.gpuModel === 'RTX 3090 Founders Edition') {
            product.instructions = 'SLEEVED 12 Pin - 400 - Corsair'
        } else if (product.gpuModel === 'RTX 3090 Ti') {
            product.instructions = 'SLEEVED 12 Pin - 400 - Corsair - 3x 8 pin build'
        }
    }

    if (product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT' || product.psuModel === 'EVGA 450/550/650/750/850 GM' || product.psuModel === 'Silverstone SX800-LTI/NJ450-SXL/Lian Li PE-750') {
        if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O') {
            if (product.gpuModel === 'RTX 3090 Ti') {
                product.instructions = 'SLEEVED 12 Pin - 300 - Silverstone - 3x 8 pin build'
            } else {
                product.instructions = 'SLEEVED 12 Pin - 300 - Silverstone'
            }
        } else if (product.case === 'Cooler Master NR200p MAX' || product.case === 'Lazer3D LZ7 XTD' || product.case === 'XTIA Xproto') {
            if (product.gpuModel === 'RTX 3090 Ti') {
                product.instructions = 'SLEEVED 12 Pin - 360 - Silverstone - 3x 8 pin build'
            } else {
                product.instructions = 'SLEEVED 12 Pin - 360 - Silverstone'
            }
        } else if (product.gpuModel === 'RTX 3060 Ti Founders Edition' || product.gpuModel === 'RTX 3070 Founders Edition') {
            product.instructions = 'SLEEVED 12 Pin - 360 - Silverstone'
        } else if (product.gpuModel === 'RTX 3080/3070 Ti/3080 Ti Founders Edition') {
            if (uCG.unsleeved12PCIECaseGroupOne3080Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 300 - Silverstone'
            } else if (uCG.unsleeved12PCIECaseGroupTwo3080Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 360 - Silverstone'
            }
        } else if (product.gpuModel === 'RTX 3090 Founders Edition') {
            if (uCG.unsleeved12PCIECaseGroupOne3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 360 - Silverstone'
            } else if (uCG.unsleeved12PCIECaseGroupTwo3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 400 - Silverstone'
            }
        } else if (product.gpuModel === 'RTX 3090 Ti') {
            if (uCG.unsleeved12PCIECaseGroupOne3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 360 - Silverstone - 3x 8 pin build'
            } else if (uCG.unsleeved12PCIECaseGroupTwo3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 400 - Silverstone - 3x 8 pin build'
            }
        }
    }

    else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX' || product.psuModel === 'Silverstone SX750/SX1000') {
        if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O') {
            if (product.gpuModel === 'RTX 3090 Ti') {
                product.instructions = 'SLEEVED 12 Pin - 300 - Cooler Master - 3x 8 pin build'
            } else {
                product.instructions = 'SLEEVED 12 Pin - 300 - Cooler Master'
            }
        } else if (product.case === 'Cooler Master NR200p MAX' || product.case === 'Lazer3D LZ7 XTD' || product.case === 'XTIA Xproto') {
            if (product.gpuModel === 'RTX 3090 Ti') {
                product.instructions = 'SLEEVED 12 Pin - 360 - Cooler Master - 3x 8 pin build'
            } else {
                product.instructions = 'SLEEVED 12 Pin - 360 - Cooler Master'
            }
        } else if (product.gpuModel === 'RTX 3060 Ti Founders Edition' || product.gpuModel === 'RTX 3070 Founders Edition') {
            product.instructions = 'SLEEVED 12 Pin - 360 - Cooler Master'
        } else if (product.gpuModel === 'RTX 3080/3070 Ti/3080 Ti Founders Edition') {
            if (uCG.unsleeved12PCIECaseGroupOne3080Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 300 - Cooler Master'
            } else if (uCG.unsleeved12PCIECaseGroupTwo3080Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 360 - Cooler Master'
            }
        } else if (product.gpuModel === 'RTX 3090 Founders Edition') {
            if (uCG.unsleeved12PCIECaseGroupOne3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 360 - Cooler Master'
            } else if (uCG.unsleeved12PCIECaseGroupTwo3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 400 - Cooler Master'
            }
        } else if (product.gpuModel === 'RTX 3090 Ti') {
            if (uCG.unsleeved12PCIECaseGroupOne3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 360 - Cooler Master - 3x 8 pin build'
            } else if (uCG.unsleeved12PCIECaseGroupTwo3090Silverstone.includes(product.case)) {
                product.instructions = 'SLEEVED 12 Pin - 400 - Cooler Master - 3x 8 pin build'
            }
        }
    }
}

module.exports = vhpwrSleeved;
