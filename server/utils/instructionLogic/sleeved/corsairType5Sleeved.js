const sCG = require('../../sleevedCableGroups')
const m24H = require('../../motherboard24headers')
const mEH = require('../../motherboardEPSHeaders')
const gCD = require('../../gpuClipDirections')

const corsairType5Sleeved = (product) => {
    // 24 PIN
    if (sCG.sleeved24GroupOne.includes(product.title) && product.senseWires === 'No') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = 'No doubles'

        if (product.t1RotatedPsu) {
            product.instructions = "Start at 180 (chart) - Build from right"
            product.combs = "1 comb"
            // POSITION OF 24 HEADER
        } else if (m24H.cornerHeaders.includes(product.moboModel)) {
            product.instructions = "Start at 178 - Build from left"
            product.combs = "1 comb"
        } else if (m24H.offsetHeaders.includes(product.moboModel)) {
            product.instructions = "Start at 190 - Build from left"
            product.combs = "1 comb"
        } else if (m24H.middleHeaders.includes(product.moboModel)) {
            product.instructions = "Start at 214 - Build from left"
            product.combs = "1 comb"
        }

    } else if (sCG.sleeved24GroupOne.includes(product.title)) {
        product.crimps = 'Same crimps - Male'
        if (product.t1RotatedPsu) {
            product.instructions = "Start at 180 (chart) - Build from right"
            product.doubles = 'No doubles'
            // product.doubles = '3, 4, 6, 12 - 160/64, 150/64, 130/55, 70/85 - top, bottom, bottom, bottom'
            product.combs = "1 comb"
        } else if (m24H.cornerHeaders.includes(product.moboModel)) {
            product.instructions = "Start at 178 - Build from left"
            product.doubles = 'No doubles'
            // product.doubles = '1, 7, 9, 10 - 172/85, 136/55, 124/64x2 - bottom, bottom, bottom, top'
            product.combs = "1 comb"
        } else if (m24H.offsetHeaders.includes(product.moboModel)) {
            product.instructions = "Start at 190 - Build from left"
            product.doubles = 'No doubles'
            // product.doubles = '1, 7, 9, 10 - 184/85, 148/55, 136/64x2 - bottom, bottom, bottom, top'
            product.combs = "1 comb"
        } else if (m24H.middleHeaders.includes(product.moboModel)) {
            product.instructions = "Start at 214 - Build from left"
            product.doubles = 'No doubles'
            // product.doubles = '1, 7, 9, 10 - 208/85, 172/55, 160/64x2 - bottom, bottom, bottom, top'
            product.combs = "1 comb"
        }
        // SSUPD
    } else if (product.title === 'SSUPD Meshlicious 24 Pin Paracord Custom Sleeved Cable' && product.senseWires === 'No') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = 'No doubles'
        product.instructions = 'All 292 (2 wires in box 5) - Build from right '
        product.combs = "4 combs"

    } else if (product.title === 'SSUPD Meshlicious 24 Pin Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = '3, 4, 6, 12 - 292/64x2, 292/55, 292/85 - top, bottom, bottom, bottom'
        product.instructions = 'All 292 (2 wires in box 5) - Build from right'
        product.combs = "4 combs"
        // NCASE
    } else if (product.title === 'NCASE M1 24 Pin Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = 'No doubles'
        if (m24H.cornerHeaders.includes(product.moboModel)) {
            product.instructions = 'Start at 208 - Red Box - Build from right'
            product.combs = "3 combs"
        } else if (m24H.offsetHeaders.includes(product.moboModel) || m24H.middleHeaders.includes(product.moboModel)) {
            product.instructions = 'Start at 190 - Red Box - Build from right'
            product.combs = "3 combs"
        }
        // NR200 and DAN C4
    } else if (product.title === 'Cooler Master NR200 24 Pin Paracord Custom Sleeved Cable' || product.title === 'DAN Cases C4-SFX 24 Pin Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = 'No doubles'
        if (m24H.cornerHeaders.includes(product.moboModel)) {
            product.instructions = 'Start at 214 - Red Box - Build from right'
            product.combs = "3 combs"
        } else if (m24H.offsetHeaders.includes(product.moboModel) || m24H.middleHeaders.includes(product.moboModel)) {
            product.instructions = 'Start at 202 - Red Box - Build from right'
            product.combs = "3 combs"
        }
        // S610
    } else if (product.title === 'Sliger S610/S620 24 Pin Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = 'No doubles'
        if (m24H.cornerHeaders.includes(product.moboModel)) {
            product.instructions = 'Start at 220 - Red Box - Build from right'
            product.combs = "3 combs"
        } else if (m24H.offsetHeaders.includes(product.moboModel) || m24H.middleHeaders.includes(product.moboModel)) {
            product.instructions = 'Start at 208 - Red Box - Build from right'
            product.combs = "3 combs"
        }
        // XPROTO
    } else if (product.title === 'XTIA Xproto 24 Pin Paracord Custom Sleeved Cable' && product.senseWires === 'No') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = 'No doubles'
        product.instructions = 'Start at 180 (chart) - Build from right'
        product.combs = "0 combs"
    } else if (product.title === 'XTIA Xproto 24 Pin Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = '3, 4, 6, 12 - 160/64, 150/64, 130/55, 70/85 - top, bottom, bottom, bottom'
        product.instructions = 'Start at 180 (chart) - Build from right'
        product.combs = "0 combs"
        // LZ7
    } else if (product.title === 'Lazer3D LZ7 24 Pin Paracord Custom Sleeved Cable' && product.senseWires === 'No') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = 'No doubles'
        product.instructions = '148/142 (pull 12 of each length) - Build from left - Long on bottom'
        product.combs = "1 comb"
    } else if (product.title === 'Lazer3D LZ7 24 Pin Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = '1, 7, 9, 10 - 148/85, 148/55, 148/64, 142/64 - bottom, bottom, bottom, top'
        product.instructions = '148/142 (pull 9 148; 11 142) - Build from left - Long on bottom'
        product.combs = "1 comb"
        // LZ7 XTD
    } else if (product.title === 'Lazer3D LZ7 XTD 24 Pin Paracord Custom Sleeved Cable' && product.senseWires === 'No') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = 'No doubles'
        product.instructions = 'Start at 268 - Build from right'
        product.combs = "3 combs"
    } else if (product.title === 'Lazer3D LZ7 XTD 24 Pin Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = '3, 4, 6, 12 - 256/64, 244/64, 232/55, 196/85 - top, bottom, bottom, bottom'
        product.instructions = 'Start at 268 - Build from right'
        product.combs = "3 combs"
        // SV590
    } else if (product.title === 'Sliger SV590 24 Pin Paracord Custom Sleeved Cable' && product.senseWires === 'No') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = 'No doubles'
        product.instructions = 'Start at 304 - Build from left'
        product.combs = "3 combs"
    } else if (product.title === 'Sliger SV590 24 Pin Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = '1, 7, 9, 10 - 298/85, 262/55, 250/64x2 - bottom, bottom, bottom, top'
        product.instructions = 'Start at 304 - Build from left'
        product.combs = "3 combs"
        // ZABER
    } else if ((product.title === 'Dr Zaber Sentry 24 Pin Paracord Custom Sleeved Cable' || product.title === 'Lian Li x DAN A4-H2O 24 Pin Paracord Custom Sleeved Cable') && product.senseWires === 'No') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = 'No doubles'
        product.instructions = 'Start at 305 (chart) - Build from right'
        product.combs = "1 comb"
    } else if (product.title === 'Dr Zaber Sentry 24 Pin Paracord Custom Sleeved Cable' || product.title === 'Lian Li x DAN A4-H2O 24 Pin Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        product.doubles = 'No doubles'
        // product.doubles = '3, 4, 6, 12 - 285/64, 275/64, 255/55, 195/85 - top, bottom, bottom, bottom'
        product.instructions = 'Start at 305 (chart) - Build from right'
        product.combs = "1 comb"
        // TERRA     
    } else if (product.title === 'Fractal Terra 24 Pin Paracord Custom Sleeved Cable' && product.senseWires === 'No') {
        product.instructions = "Start at 190 - Build from left"
        product.doubles = 'No doubles'
        // product.doubles = '1, 7, 9, 10 - 184/85, 148/55, 136/64x2 - bottom, bottom, bottom, top'
        product.combs = "1 comb"
        product.crimps = 'Same crimps - Male'

    } else if (product.title === 'Fractal Terra 24 Pin Paracord Custom Sleeved Cable') {
        product.instructions = "Start at 190 - Build from left"
        product.doubles = 'No doubles'
        // product.doubles = '1, 7, 9, 10 - 184/85, 148/55, 136/64x2 - bottom, bottom, bottom, top'
        product.combs = "1 comb"
        product.crimps = 'Same crimps - Male'
    }

    // EPS
    else if (sCG.sleevedEPSGroupOne.includes(product.title)) {
        product.crimps = 'Same crimps - Male'
        product.combs = "3 combs"
        if (mEH.insideHeaders.includes(product.moboModel)) {
            product.instructions = 'Start at 238 - Colors: 4, 3, 2, 1'
        } else if (mEH.outsideHeaders.includes(product.moboModel)) {
            product.instructions = 'Start at 268 - Colors: 4, 3, 2, 1'
        }

    } else if (product.title === 'SSUPD Meshlicious 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable' || product.title === 'XTIA Xproto 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.instructions = '360/354 - Colors: 4, 3, 2, 1 - With cross'
        product.combs = "4 combs"

    } else if (product.title === 'NCASE M1 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable' || product.title === 'Sliger S610/S620 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable') {
        if (mEH.insideHeaders.includes(product.moboModel)) {
            product.crimps = 'Same crimps - Male'
            // product.crimps = 'Same crimps - Female'
            product.instructions = '500/494 - Colors: 4, 3, 2, 1 - With cross'
            product.combs = "5 combs"
        } else if (mEH.outsideHeaders.includes(product.moboModel)) {
            product.crimps = 'Same crimps - Male'
            // product.crimps = 'Same crimps - Female'
            product.instructions = '518/512 - Colors: 4, 3, 2, 1 - With cross'
            product.combs = "5 combs"
        } else if (mEH.impact.includes(product.moboModel)) {
            product.crimps = 'Same crimps - Male'
            product.instructions = '250/232, 244/226, 238/220, 232/214 - Colors: 1, 2, 3, 4 - Long on bottom'
            product.combs = "3 combs"
        }


    } else if (product.title === 'Cooler Master NR200 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable' || product.title === 'DAN Cases C4-SFX 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable') {
        if (mEH.insideHeaders.includes(product.moboModel)) {
            product.crimps = 'Same crimps - Male'
            // product.crimps = 'Same crimps - Female'
            product.instructions = '518/512 - Colors: 4, 3, 2, 1 - With cross'
            product.combs = "5 combs"
        } else if (mEH.outsideHeaders.includes(product.moboModel)) {
            product.crimps = 'Same crimps - Male'
            // product.crimps = 'Same crimps - Female'
            product.instructions = '536/530 - Colors: 4, 3, 2, 1 - With cross'
            product.combs = "5 combs"
        } else if (mEH.impact.includes(product.moboModel)) {
            product.crimps = 'Same crimps - Male'
            product.instructions = '250/232, 244/226, 238/220, 232/214 - Colors: 1, 2, 3, 4 - Long on bottom'
            product.combs = "3 combs"
        }


    } else if (product.title === 'Lazer3D LZ7 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.combs = "2 combs"
        if (mEH.insideHeaders.includes(product.moboModel)) {
            product.instructions = 'Start at 226 (chart) - Colors: 1, 2, 3, 4 - With cross - Build from right of 4+4, 2 combs, then cross'
        } else if (mEH.outsideHeaders.includes(product.moboModel)) {
            product.instructions = 'Start at 250 (chart) - Colors: 1, 2, 3, 4 - With cross - Build from right of 4+4, 2 combs, then cross'
        }


    } else if (product.title === 'Lazer3D LZ7 XTD 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable' || product.title === 'Sliger SV590 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        if (mEH.insideHeaders.includes(product.moboModel)) {
            product.instructions = '450/444 - Colors: 4, 3, 2, 1'
            product.combs = "5 combs"
        } else if (mEH.outsideHeaders.includes(product.moboModel)) {
            product.instructions = '470/464 - Colors: 4, 3, 2, 1'
            product.combs = "5 combs"
        }

    } else if (product.title === 'Dr Zaber Sentry 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        product.instructions = '380/374 - Colors: 4, 3, 2, 1'
        product.combs = "4 combs"

    } else if (product.title === 'Lian Li x DAN A4-H2O 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        product.instructions = '420/414 - Colors: 4, 3, 2, 1'
        product.combs = "4 combs"
    }

    // 8&6 PCIE
    else if (sCG.sleevedPCIEGroupOne.includes(product.title)) {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.instructions = '310/304 - Long on top'
        product.doubles = 'No doubles'
        // product.doubles = 'Top right double - #4 is double'
        product.combs = "3 combs"
    } else if (sCG.sleevedPCIEGroupTwo.includes(product.title)) {
        if (gCD.fanClips.includes(product.gpuModel)) {
            product.crimps = 'Same crimps - Male'
            product.instructions = '280/256 - Long on top - With cross'
            product.doubles = 'No doubles'
            // product.doubles = 'Top left double - #4 is double'
            product.combs = "2 combs"
        } else if (gCD.backplateClips.includes(product.gpuModel)) {
            product.crimps = 'Same crimps - Male'
            // product.crimps = 'Same crimps - Female'
            product.instructions = 'All 280 - Long on top'
            product.doubles = 'No doubles'
            // product.doubles = 'Top right double - #1 is double'
            product.combs = "2 combs"
        }

    } else if (sCG.sleevedPCIEGroupThree.includes(product.title)) {
        if (product.gpuCableRouting === 'Around end of GPU (for use with a side mounted radiator)') {
            product.crimps = 'Same crimps - Male'
            // product.crimps = 'Same crimps - Female'
            product.instructions = '310/304 - Long on top'
            product.doubles = 'No doubles'
            // product.doubles = 'Top right double - #4 is double'
            product.combs = "3 combs"
        } else if (product.gpuCableRouting === 'Over GPU Backplate') {
            if (gCD.fanClips.includes(product.gpuModel)) {
                product.crimps = 'Same crimps - Male'
                product.instructions = '190/172 - Long on top - With cross (cross then 2 combs)'
                product.doubles = 'No doubles'
                // product.doubles = 'Top left double - #4 is double'
                product.combs = "2 combs"
            } else if (gCD.backplateClips.includes(product.gpuModel)) {
                product.crimps = 'Same crimps - Male'
                // product.crimps = 'Same crimps - Female'
                product.instructions = '190/184 - Long on bottom'
                product.doubles = 'No doubles'
                // product.doubles = 'Top right double - #1 is double'
                product.combs = "2 combs"
            }
        } else if (product.gpuMountPosition.includes('Vertical GPU')) {
            if (gCD.fanClips.includes(product.gpuModel)) {
                product.crimps = 'Same crimps - Male'
                product.instructions = '280/256 - Long on top - With cross'
                product.doubles = 'No doubles'
                // product.doubles = 'Top left double - #4 is double'
                product.combs = "2 combs"
            } else if (gCD.backplateClips.includes(product.gpuModel)) {
                product.crimps = 'Same crimps - Male'
                // product.crimps = 'Same crimps - Female'
                product.instructions = 'All 280 - Long on top'
                product.doubles = 'No doubles'
                // product.doubles = 'Top right double - #1 is double'
                product.combs = "2 combs"
            }
        }

    } else if (product.title === 'NCASE M1 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'NCASE M1 6 Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'DAN Cases C4-SFX 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'DAN Cases C4-SFX 6 Pin PCIE Paracord Custom Sleeved Cable') {
        if (gCD.fanClips.includes(product.gpuModel)) {
            product.crimps = 'Same crimps - Male'
            product.instructions = '190/172 - Long on top - With cross (cross then 2 combs)'
            product.doubles = 'No doubles'
            // product.doubles = 'Top left double - #4 is double'
            product.combs = "2 combs"
        } else if (gCD.backplateClips.includes(product.gpuModel)) {
            product.crimps = 'Same crimps - Male'
            // product.crimps = 'Same crimps - Female'
            product.instructions = '190/184 - Long on bottom'
            product.doubles = 'No doubles'
            // product.doubles = 'Top right double - #1 is double'
            product.combs = "2 combs"
        }

    } else if (sCG.sleevedPCIEGroupFour.includes(product.title)) {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.instructions = '360/354 - Long on top'
        product.doubles = 'No doubles'
        // product.doubles = 'Top right double - #4 is double'
        product.combs = "3 combs"

    } else if (product.title === 'Lazer3D LZ7 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Lazer3D LZ7 6 Pin PCIE Paracord Custom Sleeved Cable') {
        if (gCD.fanClips.includes(product.gpuModel)) {
            product.crimps = 'Same crimps - Male'
            // product.crimps = 'Same crimps - Female'
            product.instructions = '148/142 (color #4, double), 142/136, 136/130, 130/124 - Long on top'
            product.doubles = 'No doubles'
            // product.doubles = 'Top right double - #4 is double'
            product.combs = "2 combs"
        } else if (gCD.backplateClips.includes(product.gpuModel)) {
            product.crimps = 'Same crimps - Male'
            product.instructions = '166/160, 160/154, 154/148, 148/142 (color #1, double) - Long on bottom - with cross'
            product.doubles = 'No doubles'
            // product.doubles = 'Top left double - #1 is double'
            product.combs = "2 combs"
        }

    } else if (product.title === 'Lazer3D LZ7 XTD 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Lazer3D LZ7 XTD 6 Pin PCIE Paracord Custom Sleeved Cable') {
        if (gCD.fanClips.includes(product.gpuModel)) {
            product.crimps = 'Same crimps - Male'
            // product.crimps = 'Same crimps - Female'
            product.instructions = '142/136 - Long on top'
            product.doubles = 'No doubles'
            // product.doubles = 'Top right double - #4 is double'
            product.combs = "2 combs"
        } else if (gCD.backplateClips.includes(product.gpuModel)) {
            product.crimps = 'Same crimps - Male'
            product.instructions = '154/148 - Long on bottom - With cross (cross then 2 combs)'
            product.doubles = 'No doubles'
            // product.doubles = 'Top left double - #1 is double'
            product.combs = "2 combs"
        }

    } else if (product.title === 'Sliger SV590 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Sliger SV590 6 Pin PCIE Paracord Custom Sleeved Cable') {
        if (gCD.fanClips.includes(product.gpuModel)) {
            product.crimps = 'Same crimps - Male'
            product.instructions = '106/100 - Long on top - Corsair PCIE adapter needed'
            product.doubles = 'No doubles'
            // product.doubles = 'No doubles'
            product.combs = "2 combs"
        } else if (gCD.backplateClips.includes(product.gpuModel)) {
            product.crimps = 'Same crimps - Male'
            product.instructions = '148/136 - Long on bottom'
            product.doubles = 'No doubles'
            // product.doubles = 'Top right double - #1 is double'
            product.combs = "2 combs"
        }
    } else if (product.title === 'Lian Li x DAN A4-H2O 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Lian Li x DAN A4-H2O 6 Pin PCIE Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.instructions = 'All 154'
        product.doubles = 'No doubles'
        // product.doubles = 'Top right double - #4 is double'
        product.combs = "2 combs"
    }


    // SATA
    else if (sCG.sleevedSATAGroupOne.includes(product.title)) {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.instructions = '100 - Corsair'
        product.combs = "1 comb"
    } else if (sCG.sleevedSATAGroupTwo.includes(product.title)) {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.instructions = '148 - Corsair'
        product.combs = "1 comb"
    } else if (product.title === 'SSUPD Meshlicious SATA Power Paracord Custom Sleeved Cable') {
        // length is provided by customer
        product.instructions = 'Corsair SATA build'
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.combs = "1 comb for every 100mm in length"
    } else if (product.title === 'XTIA Xproto SATA Power Paracord Custom Sleeved Cable') {
        // length is provided by customer
        product.instructions = 'Corsair SATA build'
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.combs = "1 comb for every 100mm in length"
    } else if (product.title === 'Lazer3D LZ7 XTD SATA Power Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.instructions = '178 - Corsair'
        product.combs = "2 combs"
    } else if (product.title === 'Dr Zaber Sentry SATA Power Paracord Custom Sleeved Cable') {
        // length is provided by customer
        product.instructions = 'Corsair SATA build'
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.combs = "1 comb for every 100mm in length"
    } else if (product.title === 'Sliger SV590 SATA Power Paracord Custom Sleeved Cable' || product.title === 'DAN Cases C4-SFX SATA Power Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.instructions = '214 - Corsair'
        product.combs = "2 combs"
    }

    // DUAL SATA
    else if (sCG.sleevedDualSATAGroupOne.includes(product.title)) {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.instructions = 'Dual SATA - 80 - Corsair'
        product.combs = "1 comb"
        product.doubles = 'No doubles'
        // product.doubles = '5 doubles'
    } else if (sCG.sleevedDualSATAGroupTwo.includes(product.title)) {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.instructions = 'Dual SATA - 148 - Corsair'
        product.combs = "1 comb"
        product.doubles = 'No doubles'
        // product.doubles = '5 doubles'
    } else if (product.title === 'DAN Cases C4-SFX Dual SATA Power Paracord Custom Sleeved Cable') {
        product.crimps = 'Same crimps - Male'
        // product.crimps = 'Same crimps - Female'
        product.instructions = 'Dual SATA - 214 - Corsair'
        product.combs = "2 combs"
        product.doubles = 'No doubles'
        // product.doubles = '5 doubles'
    }
}

module.exports = corsairType5Sleeved;
