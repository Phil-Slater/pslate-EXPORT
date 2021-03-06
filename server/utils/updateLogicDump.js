// old way to select psu model

// CORSAIR
if (product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum') {

}

// SILVERSTONE
else if (product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT') {

}

// COOLER MASTER
else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX') {

}

// EVGA
else if (product.psuModel === 'EVGA 450/550/650/750/850 GM') {

}

// LIAN LI (SFX-L)
else if (product.psuModel === 'Silverstone SX800-LTI/NJ450-SXL/Lian Li PE-750') {

}




// CORSAIR
if (product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum') {

    // 24 PIN
    if (uCG.unsleeved24GroupOne.includes(product.title)) {
        product.instructions = "160 - Corsair Type 1"
    } else if (product.title === 'NCASE M1 24 Pin Unsleeved Custom Cable') {
        product.instructions = "170 - Corsair Type 2"
    } else if (uCG.unsleeved24GroupTwo.includes(product.title)) {
        product.instructions = "200 - Corsair Type 2"
    } else if (product.title === 'SSUPD Meshlicious 24 Pin Unsleeved Custom Cable') {
        product.instructions = "290 - Corsair Meshlicious"
    } else if (product.title === 'XTIA Xproto 24 Pin Unsleeved Custom Cable') {
        product.instructions = "180 - Corsair Type 3"
    }

    // EPS
    else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
        product.instructions = "265 - Corsair Type 1"
    }
    else if (uCG.unsleevedEPSImpactGroup.includes(product.title) && property.value === 'Asus ROG Crosshair VIII Impact') {
        product.instructions = "200 - Corsair Type 2"
    }
    else if (uCG.unsleevedEPSGroupTwo.includes(product.title)) {
        product.instructions = "360 - Corsair Meshlicious"
    }


    // 8 & 6 PCIE
    else if (uCG.unsleevedPCIEGroupOne.includes(product.title)) {
        product.instructions = "300 - Corsair Type 1"
    } else if (uCG.unsleevedPCIEGroupTwo.includes(product.title)) {
        product.instructions = "Length cannot be calculated yet. We need to setup dropdown fields on the site for the GPU Model."
    } else if (uCG.unsleevedPCIEGroupThree.includes(product.title)) {
        product.instructions = "Length cannot be calculated yet. We need to setup dropdown fields on the site for the GPU Model."
    }

    // SATA
    else if (uCG.unsleevedSATAGroupOne.includes(product.title)) {
        product.instructions = "Single SATA - 100 - Corsair"
    } else if (uCG.unsleevedSATAGroupTwo.includes(product.title)) {
        product.instructions = "Single SATA - 150 - Corsair"
    }

    // DUAL SATA
    else if (uCG.unsleevedDualSATAGroupOne.includes(product.title)) {
        product.instructions = "Dual SATA - 80 - Corsair"
    } else if (uCG.unsleevedDualSATAGroupTwo.includes(product.title)) {
        product.instructions = "Dual SATA - 150 - Corsair"
    }
}

// SILVERSTONE
else if (product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT') {

    // 24 PIN
    if (uCG.unsleeved24GroupOne.includes(product.title)) {
        product.instructions = "160 - Silverstone Type 1"
    } else if (product.title === 'NCASE M1 24 Pin Unsleeved Custom Cable') {
        product.instructions = "230 - Silverstone Type 2"
    } else if (uCG.unsleeved24GroupTwo.includes(product.title)) {
        product.instructions = "260 - Silverstone Type 2"
    } else if (product.title === 'XTIA Xproto 24 Pin Unsleeved Custom Cable') {
        product.instructions = "130 - Silverstone Type 3"
    }

    //EPS
    else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
        product.instructions = "280 - Silverstone Type 1"
    } else if (uCG.unsleeved24GroupTwo.includes(product.title)) {
        product.instructions = "360 - Silverstone Type 2/3"
    } else if (uCG.unsleevedEPSImpactGroup.includes(product.title) && property.value === 'Asus ROG Crosshair VIII Impact') {
        product.instructions = "210 - Silverstone Type 2"
    }

    // 8 & 6 PCIE
    else if (uCG.unsleevedPCIEGroupOne.includes(product.title) || uCG.unsleevedPCIEGroupThree.includes(product.title)) {
        product.instructions = "300 - Silverstone Type 1"
    } else if (uCG.unsleevedPCIEGroupTwo.includes(product.title)) {
        product.instructions = "Length cannot be calculated yet. We need to setup dropdown fields on the site for the GPU Model."
    }

    // SATA
    else if (uCG.unsleevedSATAGroupOne.includes(product.title)) {
        product.instructions = "Single SATA - 100 - Silverstone"
    } else if (uCG.unsleevedSATAGroupTwo.includes(product.title)) {
        product.instructions = "Single SATA - 150 - Silverstone"
    }

    // DUAL SATA
    else if (uCG.unsleevedDualSATAGroupOne.includes(product.title)) {
        product.instructions = "Dual SATA - 80 - Silverstone"
    } else if (uCG.unsleevedDualSATAGroupTwo.includes(product.title)) {
        product.instructions = "Dual SATA - 150 - Silverstone"
    }
}

// COOLER MASTER
else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX') {

    // 24 PIN
    if (uCG.unsleeved24GroupOne.includes(product.title)) {
        product.instructions = "140 - Cooler Master Type 1"
    } else if (product.title === 'SSUPD Meshlicious 24 Pin Unsleeved Custom Cable') {
        product.instructions = "280/290 - Cooler Master Meshlicious"
    }

    // EPS
    else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
        product.instructions = "280 - Silverstone Type 1"
    } else if (product.title === 'SSUPD Meshlicious 8 (4+4) Pin CPU/EPS Unsleeved Custom Cable') {
        product.instructions = "360 - Silverstone Type 2/3"
    }

    // 8 & 6 PCIE
    else if (uCG.unsleevedPCIEGroupOne.includes(product.title)) {
        product.instructions = "300 - Silverstone Type 1"
    } else if (uCG.unsleevedPCIEGroupTwo.includes(product.title)) {
        product.instructions = "Length cannot be calculated yet. We need to setup dropdown fields on the site for the GPU Model."
    } else if (uCG.unsleevedPCIEGroupThree.includes(product.title)) {
        product.instructions = "Length cannot be calculated yet. We need to setup dropdown fields on the site for the GPU Model."
    }

    // SATA
    else if (uCG.unsleevedSATAGroupOne.includes(product.title)) {
        product.instructions = "Single SATA - 100 - Cooler Master"
    } else if (uCG.unsleevedSATAGroupTwo.includes(product.title)) {
        product.instructions = "Single SATA - 150 - Cooler Master"
    }

    // DUAL SATA
    else if (uCG.unsleevedDualSATAGroupOne.includes(product.title)) {
        product.instructions = "Dual SATA - 80 - Cooler Master"
    } else if (uCG.unsleevedDualSATAGroupTwo.includes(product.title)) {
        product.instructions = "Dual SATA - 150 - Cooler Master"
    }
}

// EVGA
else if (product.psuModel === 'EVGA 450/550/650/750/850 GM') {

    // 24 PIN
    if (uCG.unsleeved24GroupOne.includes(product.title)) {
        product.instructions = "170 - EVGA Type 1"
    }

    // EPS
    else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
        product.instructions = "280 - Silverstone Type 1"
    }

    // 8 & 6 PCIE
    else if (uCG.unsleevedPCIEGroupOne.includes(product.title) || uCG.unsleevedPCIEGroupThree.includes(product.title)) {
        product.instructions = "300 - Silverstone Type 1"
    }

    // SATA
    else if (uCG.unsleevedSATAGroupOne.includes(product.title)) {
        product.instructions = "Single SATA - 150 - EVGA"
    } else if (uCG.unsleevedSATAGroupTwo.includes(product.title)) {
        product.instructions = "Single SATA - 180 - EVGA"
    }

    // DUAL SATA
    // Not an option for EVGA
}


// LIAN LI SFXL
else if (product.psuModel === 'Silverstone SX800-LTI/NJ450-SXL/Lian Li PE-750') {

    // 24 PIN
    if (uCG.unsleeved24GroupOne.includes(product.title)) {
        product.instructions = "180 - Lian Li Type 1"
    }

    // EPS
    else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
        product.instructions = "310 - Silverstone Type 1 (like 280 Silverstone - Type 1 but longer"
    }

    // 8 & 6 PCIE
    else if (uCG.unsleevedPCIEGroupOne.includes(product.title) || unsleevedPCIEGroupThree.includes(product.title)) {
        product.instructions = "300 - Silverstone Type 1"
    }

    // SATA
    else if (uCG.unsleevedSATAGroupOne.includes(product.title)) {
        product.instructions = "Single SATA - 100 - Silverstone"
    } else if (uCG.unsleevedSATAGroupTwo.includes(product.title)) {
        product.instructions = "Single SATA - 150 - Silverstone"
    }

    // DUAL SATA
    // Not an option for Lian Li (SFX-L)
}
