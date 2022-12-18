const sCG = require('./sleevedCableGroups')
const m24H = require('./motherboard24headers')
const mEH = require('./motherboardEPSHeaders')
const gCD = require('./gpuClipDirections')
const uCG = require('./unsleevedCableGroups')

function updateSleeved(orders) {
    orders.forEach(order => {
        order.line_items.forEach(product => {

            // ALL SLEEVED 12 PINS
            if (product.title === 'Nvidia 12 Pin PCIE Sleeved Custom Cable') {
                if (product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum') {
                    if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O') {
                        if (product.gpuModel === 'RTX 3090 Ti') {
                            product.instructions = 'SLEEVED 12 Pin - 300 - Corsair - 3x 8 pin build'
                        } else {
                            product.instructions = 'SLEEVED 12 Pin - 300 - Corsair'
                        }
                    } else if (product.case === 'Cooler Master NR200p MAX' || product.case === 'Lazer3D LZ7 XTD' || product.case === 'XTIA Xproto') {
                        if (product.gpuModel === 'RTX 3090 Ti') {
                            product.instructions = 'SLEEVED 12 Pin - 360 - Corsair - 3x 8 pin build'
                        } else {
                            product.instructions = 'SLEEVED 12 Pin - 360 - Corsair'
                        }
                    } else if (product.gpuModel === 'RTX 3060 Ti Founders Edition' || product.gpuModel === 'RTX 3070 Founders Edition') {
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

            // CORSAIR
            if (product.psuModel === 'Corsair SF450/SF600/SF750 (Platinum)' || product.psuModel === 'Corsair SF450/SF600 (Gold)' || product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum') {

                // 24 PIN
                if (sCG.sleeved24GroupOne.includes(product.title) && product.senseWires === 'No') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = 'No doubles'

                    // POSITION OF 24 HEADER
                    if (m24H.cornerHeaders.includes(product.moboModel)) {
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
                    product.crimps = 'Opposite crimps'

                    if (m24H.cornerHeaders.includes(product.moboModel)) {
                        product.instructions = "Start at 178 - Build from left"
                        product.doubles = '1, 7, 9, 10 - 172/85, 136/55, 124/64x2 - bottom, bottom, bottom, top'
                        product.combs = "1 comb"
                    } else if (m24H.offsetHeaders.includes(product.moboModel)) {
                        product.instructions = "Start at 190 - Build from left"
                        product.doubles = '1, 7, 9, 10 - 184/85, 148/55, 136/64x2 - bottom, bottom, bottom, top'
                        product.combs = "1 comb"
                    } else if (m24H.middleHeaders.includes(product.moboModel)) {
                        product.instructions = "Start at 214 - Build from left"
                        product.doubles = '1, 7, 9, 10 - 208/85, 172/55, 160/64x2 - bottom, bottom, bottom, top'
                        product.combs = "1 comb"
                    }
                    // SSUPD
                } else if (product.title === 'SSUPD Meshlicious 24 Pin Paracord Custom Sleeved Cable' && product.senseWires === 'No') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = 'No doubles'
                    product.instructions = 'All 292 (2 wires in box 5) - Build from right '
                    product.combs = "4 combs"

                } else if (product.title === 'SSUPD Meshlicious 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = '3, 4, 6, 12 - 292/64x2, 292/55, 292/85 - top, bottom, bottom, bottom'
                    product.instructions = 'All 292 (2 wires in box 5) - Build from right'
                    product.combs = "4 combs"
                    // NCASE
                } else if (product.title === 'NCASE M1 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Male'
                    product.doubles = 'No doubles'
                    if (m24H.cornerHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 208 - Red Box - Build from right'
                        product.combs = "3 combs"
                    } else if (m24H.offsetHeaders.includes(product.moboModel) || m24H.middleHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 190 - Red Box - Build from right'
                        product.combs = "3 combs"
                    }
                    // NR200
                } else if (product.title === 'Cooler Master NR200 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Male'
                    product.doubles = 'No doubles'
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
                    if (m24H.cornerHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 220 - Red Box - Build from right'
                        product.combs = "3 combs"
                    } else if (m24H.offsetHeaders.includes(product.moboModel) || m24H.middleHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 208 - Red Box - Build from right'
                        product.combs = "3 combs"
                    }
                    // XPROTO
                } else if (product.title === 'XTIA Xproto 24 Pin Paracord Custom Sleeved Cable' && product.senseWires === 'No') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = 'No doubles'
                    product.instructions = 'Start at 180 (chart) - Build from right'
                    product.combs = "0 combs"
                } else if (product.title === 'XTIA Xproto 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = '3, 4, 6, 12 - 160/64, 150/64, 130/55, 70/85 - top, bottom, bottom, bottom'
                    product.instructions = 'Start at 180 (chart) - Build from right'
                    product.combs = "0 combs"
                    // LZ7
                } else if (product.title === 'Lazer3D LZ7 24 Pin Paracord Custom Sleeved Cable' && product.senseWires === 'No') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = 'No doubles'
                    product.instructions = '148/142 (pull 12 of each length) - Build from left - Long on bottom'
                    product.combs = "1 comb"
                } else if (product.title === 'Lazer3D LZ7 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = '1, 7, 9, 10 - 148/85, 148/55, 148/64, 142/64 - bottom, bottom, bottom, top'
                    product.instructions = '148/142 (pull 9 148; 11 142) - Build from left - Long on bottom'
                    product.combs = "1 comb"
                    // LZ7 XTD
                } else if (product.title === 'Lazer3D LZ7 XTD 24 Pin Paracord Custom Sleeved Cable' && product.senseWires === 'No') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = 'No doubles'
                    product.instructions = 'Start at 268 - Build from right'
                    product.combs = "3 combs"
                } else if (product.title === 'Lazer3D LZ7 XTD 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = '3, 4, 6, 12 - 256/64, 244/64, 232/55, 196/85 - top, bottom, bottom, bottom'
                    product.instructions = 'Start at 268 - Build from right'
                    product.combs = "3 combs"
                    // SV590
                } else if (product.title === 'Sliger SV590 24 Pin Paracord Custom Sleeved Cable' && product.senseWires === 'No') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = 'No doubles'
                    product.instructions = 'Start at 304 - Build from left'
                    product.combs = "3 combs"
                } else if (product.title === 'Sliger SV590 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = '1, 7, 9, 10 - 298/85, 262/55, 250/64x2 - bottom, bottom, bottom, top'
                    product.instructions = 'Start at 304 - Build from left'
                    product.combs = "3 combs"
                    // ZABER
                } else if ((product.title === 'Dr Zaber Sentry 24 Pin Paracord Custom Sleeved Cable' || product.title === 'Lian Li x DAN A4-H2O 24 Pin Paracord Custom Sleeved Cable') && product.senseWires === 'No') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = 'No doubles'
                    product.instructions = 'Start at 305 (chart) - Build from right'
                    product.combs = "1 comb"
                } else if (product.title === 'Dr Zaber Sentry 24 Pin Paracord Custom Sleeved Cable' || product.title === 'Lian Li x DAN A4-H2O 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = '3, 4, 6, 12 - 285/64, 275/64, 255/55, 195/85 - top, bottom, bottom, bottom'
                    product.instructions = 'Start at 305 (chart) - Build from right'
                    product.combs = "1 comb"
                }

                // EPS
                else if (sCG.sleevedEPSGroupOne.includes(product.title)) {
                    product.crimps = 'Opposite crimps'
                    product.combs = "3 combs"
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 238 - Colors: 4, 3, 2, 1'
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 268 - Colors: 4, 3, 2, 1'
                    }

                } else if (product.title === 'SSUPD Meshlicious 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable' || product.title === 'XTIA Xproto 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '360/354 - Colors: 4, 3, 2, 1 - With cross'
                    product.combs = "4 combs"

                } else if (product.title === 'NCASE M1 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable' || product.title === 'Sliger S610/S620 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable') {
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '500/494 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '518/512 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.impact.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '250/232, 244/226, 238/220, 232/214 - Colors: 1, 2, 3, 4 - Long on bottom'
                        product.combs = "3 combs"
                    }


                } else if (product.title === 'Cooler Master NR200 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable') {
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '518/512 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '536/530 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.impact.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '250/232, 244/226, 238/220, 232/214 - Colors: 1, 2, 3, 4 - Long on bottom'
                        product.combs = "3 combs"
                    }


                } else if (product.title === 'Lazer3D LZ7 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.combs = "2 combs"
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 226 (chart) - Colors: 1, 2, 3, 4 - With cross - Build from right of 4+4, 2 combs, then cross'
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 250 (chart) - Colors: 1, 2, 3, 4 - With cross - Build from right of 4+4, 2 combs, then cross'
                    }


                } else if (product.title === 'Lazer3D LZ7 XTD 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable' || product.title === 'Sliger SV590 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.instructions = '450/444 - Colors: 4, 3, 2, 1'
                        product.combs = "5 combs"
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.instructions = '470/464 - Colors: 4, 3, 2, 1'
                        product.combs = "5 combs"
                    }

                } else if (product.title === 'Dr Zaber Sentry 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.instructions = '380/374 - Colors: 4, 3, 2, 1'
                    product.combs = "4 combs"

                } else if (product.title === 'Lian Li x DAN A4-H2O 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.instructions = '420/414 - Colors: 4, 3, 2, 1'
                    product.combs = "4 combs"
                }

                // 8&6 PCIE
                else if (sCG.sleevedPCIEGroupOne.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '310/304 - Long on top'
                    product.doubles = 'Top right double - #4 is double'
                    product.combs = "3 combs"
                } else if (sCG.sleevedPCIEGroupTwo.includes(product.title)) {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '280/256 - Long on top - With cross'
                        product.doubles = 'Top left double - #4 is double'
                        product.combs = "2 combs"
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = 'All 280 - Long on top'
                        product.doubles = 'Top right double - #1 is double'
                        product.combs = "2 combs"
                    }

                } else if (sCG.sleevedPCIEGroupThree.includes(product.title)) {
                    if (product.gpuCableRouting === 'Around end of GPU (for use with a side mounted radiator)') {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '310/304 - Long on top'
                        product.doubles = 'Top right double - #4 is double'
                        product.combs = "3 combs"
                    } else if (product.gpuCableRouting === 'Over GPU Backplate') {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.crimps = 'Opposite crimps'
                            product.instructions = '190/172 - Long on top - With cross (cross then 2 combs)'
                            product.doubles = 'Top left double - #4 is double'
                            product.combs = "2 combs"
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.crimps = 'Same crimps - Female'
                            product.instructions = '190/184 - Long on bottom'
                            product.doubles = 'Top right double - #1 is double'
                            product.combs = "2 combs"
                        }
                    } else if (product.gpuMountPosition.includes('Vertical GPU')) {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.crimps = 'Opposite crimps'
                            product.instructions = '280/256 - Long on top - With cross'
                            product.doubles = 'Top left double - #4 is double'
                            product.combs = "2 combs"
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.crimps = 'Same crimps - Female'
                            product.instructions = 'All 280 - Long on top'
                            product.doubles = 'Top right double - #1 is double'
                            product.combs = "2 combs"
                        }
                    }

                } else if (product.title === 'NCASE M1 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'NCASE M1 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '190/172 - Long on top - With cross (cross then 2 combs)'
                        product.doubles = 'Top left double - #4 is double'
                        product.combs = "2 combs"
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '190/184 - Long on bottom'
                        product.doubles = 'Top right double - #1 is double'
                        product.combs = "2 combs"
                    }

                } else if (product.title === 'Sliger SM550/SM560/SM570/SM580 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Sliger SM550/SM560/SM570/SM580 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '360/354 - Long on top'
                    product.doubles = 'Top right double - #4 is double'
                    product.combs = "3 combs"

                } else if (product.title === 'Lazer3D LZ7 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Lazer3D LZ7 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '148/142 (color #4, double), 142/136, 136/130, 130/124 - Long on top'
                        product.doubles = 'Top right double - #4 is double'
                        product.combs = "2 combs"
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '166/160, 160/154, 154/148, 148/142 (color #1, double) - Long on bottom - with cross'
                        product.doubles = 'Top left double - #1 is double'
                        product.combs = "2 combs"
                    }

                } else if (product.title === 'Lazer3D LZ7 XTD 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Lazer3D LZ7 XTD 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '142/136 - Long on top'
                        product.doubles = 'Top right double - #4 is double'
                        product.combs = "2 combs"
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '154/148 - Long on bottom - With cross (cross then 2 combs)'
                        product.doubles = 'Top left double - #1 is double'
                        product.combs = "2 combs"
                    }

                } else if (product.title === 'Sliger SV590 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Sliger SV590 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.crimps = 'Same crimps - Male'
                        product.instructions = '106/100 - Long on top - Corsair PCIE adapter needed'
                        product.doubles = 'No doubles'
                        product.combs = "2 combs"
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '148/136 - Long on bottom'
                        product.doubles = 'Top right double - #1 is double'
                        product.combs = "2 combs"
                    }
                } else if (product.title === 'Lian Li x DAN A4-H2O 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Lian Li x DAN A4-H2O 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = 'All 154'
                    product.doubles = 'Top right double - #4 is double'
                    product.combs = "2 combs"
                }


                // SATA
                else if (sCG.sleevedSATAGroupOne.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '100 - Corsair'
                    product.combs = "1 comb"
                } else if (sCG.sleevedSATAGroupTwo.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '148 - Corsair'
                    product.combs = "1 comb"
                } else if (product.title === 'SSUPD Meshlicious SATA Power Paracord Custom Sleeved Cable') {
                    // length is provided by customer
                    product.instructions = 'Corsair SATA build'
                    product.crimps = 'Same crimps - Female'
                    product.combs = "1 comb for every 100mm in length"
                } else if (product.title === 'XTIA Xproto SATA Power Paracord Custom Sleeved Cable') {
                    // length is provided by customer
                    product.instructions = 'Corsair SATA build'
                    product.crimps = 'Same crimps - Female'
                    product.combs = "1 comb for every 100mm in length"
                } else if (product.title === 'Lazer3D LZ7 XTD SATA Power Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '178 - Corsair'
                    product.combs = "2 combs"
                } else if (product.title === 'Dr Zaber Sentry SATA Power Paracord Custom Sleeved Cable') {
                    // length is provided by customer
                    product.instructions = 'Corsair SATA build'
                    product.crimps = 'Same crimps - Female'
                    product.combs = "1 comb for every 100mm in length"
                } else if (product.title === 'Sliger SV590 SATA Power Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '214 - Corsair'
                    product.combs = "2 combs"
                }

                // DUAL SATA
                else if (sCG.sleevedDualSATAGroupOne.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = 'Dual SATA - 80 - Corsair'
                    product.combs = "1 comb"
                    product.doubles = '5 doubles'
                } else if (sCG.sleevedDualSATAGroupTwo.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = 'Dual SATA - 148 - Corsair'
                    product.combs = "1 comb"
                    product.doubles = '5 doubles'
                }
            }

            // SILVERSTONE
            else if (product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT') {

                // 24 PIN
                if (sCG.sleeved24GroupOne.includes(product.title) && product.senseWires === 'No') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = 'No doubles'

                    // POSITION OF 24 HEADER
                    if (m24H.cornerHeaders.includes(product.moboModel)) {
                        product.instructions = "Start at 178 - Build from right - Connectors: 2x 24 pin"
                        product.combs = "1 comb"
                    } else if (m24H.offsetHeaders.includes(product.moboModel)) {
                        product.instructions = "Start at 190 - Build from right - Connectors: 2x 24 pin"
                        product.combs = "1 comb"
                    } else if (m24H.middleHeaders.includes(product.moboModel)) {
                        product.instructions = "Start at 214 - Build from right - Connectors: 2x 24 pin"
                        product.combs = "1 comb"
                    }

                } else if (sCG.sleeved24GroupOne.includes(product.title)) {
                    product.crimps = 'Opposite crimps'

                    if (m24H.cornerHeaders.includes(product.moboModel)) {
                        product.instructions = "Start at 178 - Build from right - Connectors: 2x 24 pin and 4 pin"
                        product.doubles = '6, 7, 9, 12 - 142/85, 136/85, 130/64, 106/55 - bottom, bottom, top, bottom'
                        product.combs = "1 comb"
                    } else if (m24H.offsetHeaders.includes(product.moboModel)) {
                        product.instructions = "Start at 190 - Build from right - Connectors: 2x 24 pin and 4 pin"
                        product.doubles = '6, 7, 9, 12 - 154/85, 148/85, 142/64, 118/55 - bottom, bottom, top, bottom'
                        product.combs = "1 comb"
                    } else if (m24H.middleHeaders.includes(product.moboModel)) {
                        product.instructions = "Start at 214 - Build from right - Connectors: 2x 24 pin and 4 pin"
                        product.doubles = '6, 7, 9, 12 - 178/85, 172/85, 166/64, 142/55 - bottom, bottom, top, bottom'
                        product.combs = "1 comb"
                    }
                }

                // NCASE / NR200 / S610
                else if (sCG.sleeved24GroupTwo.includes(product.title)) {
                    product.crimps = 'Opposite crimps'
                    if (product.senseWires === 'No') {
                        product.doubles = 'No doubles'
                        product.instructions = 'Start at 280 - Build from right - Connectors: 2x 24 pin'
                    } else {
                        product.doubles = '6, 7, 9, 12 - 244/85, 238/85, 232/64, 208/55 - bottom, bottom, top, bottom'
                        product.instructions = 'Start at 280 - Build from right - Connectors: 2x 24 pin and 4 pin'
                    }
                }

                // XPROTO
                else if (product.title === 'XTIA Xproto 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    if (product.senseWires === 'No') {
                        product.doubles = 'No doubles'
                        product.instructions = 'All wires 142 - Build from right - Connectors: 2x 24 pin'
                    } else {
                        product.doubles = '6, 7, 9, 12 - 142/85, 142/85, 142/64, 142/55 - bottom, bottom, top, bottom'
                        product.instructions = 'All wires 142 - Build from right - Connectors: 2x 24 pin and 4 pin'
                    }
                }

                // EPS

                // sandwich EPS
                else if (sCG.sleevedEPSGroupOne.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.combs = "3 combs"
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 256 - Colors: 4, 3, 2, 1'
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 286 - Colors: 4, 3, 2, 1'
                    }
                }

                // NCASE / S610 EPS
                else if (product.title === 'NCASE M1 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable' || product.title === 'Sliger S610/S620 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable') {
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '500/494 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '518/512 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.impact.includes(product.moboModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '244/226, 238/220, 232/214, 226/208 - Colors: 1, 2, 3, 4 - Long on bottom'
                        product.combs = "3 combs"
                    }
                }

                // NR200 EPS
                else if (product.title === 'Cooler Master NR200 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable') {
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '518/512 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '536/530 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.impact.includes(product.moboModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '244/226, 238/220, 232/214, 226/208 - Colors: 1, 2, 3, 4 - Long on bottom'
                        product.combs = "3 combs"
                    }
                }

                // Xproto EPS
                else if (product.title === 'XTIA Xproto 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '360/354 - Colors: 4, 3, 2, 1 - No cross'
                    product.combs = "4 combs"
                }

                //8&6 PCIE
                else if (sCG.sleevedPCIEGroupOne.includes(product.title) || product.title === 'Sliger SM550/SM560/SM570/SM580 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Sliger SM550/SM560/SM570/SM580 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '310/304 - Long on top - Silverstone PCIE build!'
                    product.doubles = 'No doubles'
                    product.combs = "3 combs"
                }

                else if (sCG.sleevedPCIEGroupTwo.includes(product.title)) {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = 'All 244 - Silverstone PCIE build!'
                        product.doubles = 'No doubles'
                        product.combs = "2 combs"
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '256/232 - Silverstone PCIE - Long on bottom - Build from 6+2 (or 6 pin) connector - 2 combs, then cross into full 8 PCIE'
                        product.doubles = 'No doubles'
                        product.combs = "2 combs"
                    }
                }

                else if (sCG.sleevedPCIEGroupThree.includes(product.title)) {
                    if (product.gpuCableRouting === 'Around end of GPU (for use with a side mounted radiator)') {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '310/304 - Long on top - Silverstone PCIE build!'
                        product.doubles = 'No doubles'
                        product.combs = "3 combs"
                    } else if (product.gpuCableRouting === 'Over GPU Backplate') {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.crimps = 'Same crimps - Female'
                            product.instructions = '172/166 - Long on top - Silverstone PCIE build!'
                            product.doubles = 'No doubles'
                            product.combs = "2 combs"
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.crimps = 'Opposite crimps'
                            product.instructions = '178/160 - Silverstone PCIE - Long on bottom - Build from 6+2 (or 6 pin) connector - 2 combs, then cross into full 8 PCIE'
                            product.doubles = 'No doubles'
                            product.combs = "2 combs"
                        }
                    } else if (product.gpuMountPosition.includes('Vertical GPU')) {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.crimps = 'Same crimps - Female'
                            product.instructions = 'All 244 - Silverstone PCIE build!'
                            product.doubles = 'No doubles'
                            product.combs = "2 combs"
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.crimps = 'Opposite crimps'
                            product.instructions = '256/232 - Silverstone PCIE - Long on bottom - Build from 6+2 (or 6 pin) connector - 2 combs, then cross into full 8 PCIE'
                            product.doubles = 'No doubles'
                            product.combs = "2 combs"
                        }
                    }
                }

                else if (product.title === 'NCASE M1 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'NCASE M1 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '172/166 - Long on top - Silverstone PCIE build!'
                        product.doubles = 'No doubles'
                        product.combs = "2 combs"
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '178/160 - Silverstone PCIE - Long on bottom - Build from 6+2 (or 6 pin) connector - 2 combs, then cross into full 8 PCIE'
                        product.doubles = 'No doubles'
                        product.combs = "2 combs"
                    }
                }

                // SATA
                else if (sCG.sleevedSATAGroupOne.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '100 - Silverstone'
                    product.combs = "1 comb"
                } else if (sCG.sleevedSATAGroupTwo.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '148 - Silverstone'
                    product.combs = "1 comb"
                } else if (product.title === 'XTIA Xproto SATA Power Paracord Custom Sleeved Cable') {
                    // length is provided by customer
                    product.instructions = 'Silverstone SATA build'
                    product.crimps = 'Same crimps - Female'
                    product.combs = "1 comb for every 100mm in length"
                }

                // DUAL SATA
                else if (sCG.sleevedDualSATAGroupOne.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = 'Dual SATA - 80 - Silverstone'
                    product.combs = "1 comb"
                    product.doubles = '5 doubles'
                } else if (sCG.sleevedDualSATAGroupTwo.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = 'Dual SATA - 148 - Silverstone'
                    product.combs = "1 comb"
                    product.doubles = '5 doubles'
                }
            }

            // EVGA GM
            else if (product.psuModel === 'EVGA 450/550/650/750/850 GM') {

                // 24 PIN - Sandwich
                // still calculating lengths needed for EVGA sandwich 24 pins
                if (sCG.sleeved24GroupOne.includes(product.title)) {
                    product.crimps = 'Opposite crimps'

                    if (m24H.cornerHeaders.includes(product.moboModel)) {
                        product.instructions = "All 172 - Build from right"
                        product.doubles = '3, 4, 8, 10, 12 - 172/64, 172/55, 172/55, 172/55, 172/64, top, bottom, bottom, bottom, bottom - EVGA Build'
                        product.combs = "1 comb"
                    } else if (m24H.offsetHeaders.includes(product.moboModel) || (m24H.middleHeaders.includes(product.moboModel))) {
                        product.instructions = "All 184 - Build from right"
                        product.doubles = '3, 4, 8, 10, 12 - 184/64, 184/55, 184/55, 184/55, 184/64, top, bottom, bottom, bottom, bottom - EVGA Build'
                        product.combs = "1 comb"
                    }
                }

                // NCASE / NR200 / S610
                else if (sCG.sleeved24GroupTwo.includes(product.title)) {
                    product.crimps = 'Same crimps - Male'
                    product.instructions = 'Start at 220 - Red Box - Build from right'
                    product.doubles = 'No doubles'
                    product.combs = "3 combs"
                } else if (product.title === 'Lian Li x DAN A4-H2O 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.instructions = "All 256 - Build from right"
                    product.doubles = '3, 4, 8, 10, 12 - 256/64, 256/55, 256/55, 256/55, 256/64, top, bottom, bottom, bottom, bottom - EVGA Build'
                    product.combs = "1 comb"
                }
                // EPS

                // sandwich EPS
                else if (sCG.sleevedEPSGroupOne.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.combs = "3 combs"
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 256 - Colors: 4, 3, 2, 1'
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 286 - Colors: 4, 3, 2, 1'
                    }
                }

                // NCASE / S610 EPS
                else if (product.title === 'NCASE M1 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable' || product.title === 'Sliger S610/S620 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable') {
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '500/494 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '518/512 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.impact.includes(product.moboModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '244/226, 238/220, 232/214, 226/208 - Colors: 1, 2, 3, 4 - Long on bottom'
                        product.combs = "3 combs"
                    }
                }

                // NR200 EPS
                else if (product.title === 'Cooler Master NR200 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable') {
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '518/512 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '536/530 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.impact.includes(product.moboModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '244/226, 238/220, 232/214, 226/208 - Colors: 1, 2, 3, 4 - Long on bottom'
                        product.combs = "3 combs"
                    }
                }

                // H2O EPS
                else if (product.title === 'Lian Li x DAN A4-H2O 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '420/414 - Colors: 4, 3, 2, 1 - No cross'
                    product.combs = "4 combs"
                }

                //8&6 PCIE
                else if (sCG.sleevedPCIEGroupOne.includes(product.title) || product.title === 'Sliger SM550/SM560/SM570/SM580 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Sliger SM550/SM560/SM570/SM580 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '310/304 - Long on top - Silverstone PCIE build!'
                    product.doubles = 'No doubles'
                    product.combs = "3 combs"
                }

                else if (sCG.sleevedPCIEGroupTwo.includes(product.title)) {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = 'All 244 - Silverstone PCIE build!'
                        product.doubles = 'No doubles'
                        product.combs = "2 combs"
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '256/232 - Silverstone PCIE - Long on bottom - Build from 6+2 (or 6 pin) connector - 2 combs, then cross into full 8 PCIE'
                        product.doubles = 'No doubles'
                        product.combs = "2 combs"
                    }
                }

                else if (sCG.sleevedPCIEGroupThree.includes(product.title)) {
                    if (product.gpuCableRouting === 'Around end of GPU (for use with a side mounted radiator)') {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '310/304 - Long on top - Silverstone PCIE build!'
                        product.doubles = 'No doubles'
                        product.combs = "3 combs"
                    } else if (product.gpuCableRouting === 'Over GPU Backplate') {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.crimps = 'Same crimps - Female'
                            product.instructions = '172/166 - Long on top - Silverstone PCIE build!'
                            product.doubles = 'No doubles'
                            product.combs = "2 combs"
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.crimps = 'Opposite crimps'
                            product.instructions = '178/160 - Silverstone PCIE - Long on bottom - Build from 6+2 (or 6 pin) connector - 2 combs, then cross into full 8 PCIE'
                            product.doubles = 'No doubles'
                            product.combs = "2 combs"
                        }
                    } else if (product.gpuMountPosition.includes('Vertical GPU')) {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.crimps = 'Same crimps - Female'
                            product.instructions = 'All 244 - Silverstone PCIE build!'
                            product.doubles = 's'
                            product.combs = "2 combs"
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.crimps = 'Opposite crimps'
                            product.instructions = '256/232 - Silverstone PCIE - Long on bottom - Build from 6+2 (or 6 pin) connector - 2 combs, then cross into full 8 PCIE'
                            product.doubles = 'No doubles'
                            product.combs = "2 combs"
                        }
                    }
                }

                else if (product.title === 'NCASE M1 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'NCASE M1 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '172/166 - Long on top - Silverstone PCIE build!'
                        product.doubles = 'No doubles'
                        product.combs = "2 combs"
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '178/160 - Silverstone PCIE - Long on bottom - Build from 6+2 (or 6 pin) connector - 2 combs, then cross into full 8 PCIE'
                        product.doubles = 'No doubles'
                        product.combs = "2 combs"
                    }
                }

                else if (product.title === 'Lian Li x DAN A4-H2O 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Lian Li x DAN A4-H2O 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = 'All 148 - Silverstone PCIE build!'
                    product.doubles = 'No doubles'
                    product.combs = "2 combs"
                }

                // SATA
                else if (sCG.sleevedSATAGroupOne.includes(product.title)) {
                    product.crimps = 'Opposite crimps'
                    product.instructions = '148 - EVGA'
                    product.combs = "1 comb"
                } else if (sCG.sleevedSATAGroupTwo.includes(product.title)) {
                    product.crimps = 'Opposite crimps'
                    product.instructions = '178 - EVGA'
                    product.combs = "2 combs"
                } else if (product.title === 'XTIA Xproto SATA Power Paracord Custom Sleeved Cable') {
                    // length is provided by customer
                    product.instructions = 'EVGA SATA build'
                    product.crimps = 'Opposite crimps'
                    product.combs = "1 comb for every 100mm in length"
                }

                // DUAL SATA
                else if (sCG.sleevedDualSATAGroupOne.includes(product.title)) {
                    product.crimps = 'Opposite crimps'
                    product.instructions = 'Dual SATA - 148 - Silverstone'
                    product.combs = "1 comb"
                    product.doubles = '5 doubles'
                } else if (sCG.sleevedDualSATAGroupTwo.includes(product.title)) {
                    product.crimps = 'Opposite crimps'
                    product.instructions = 'Dual SATA - 178 - Silverstone'
                    product.combs = "2 comb"
                    product.doubles = '5 doubles'
                }
            }

            // COOLER MASTER
            else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX') {

                // 24 PIN - Sandwich
                if (sCG.sleeved24GroupOne.includes(product.title)) {
                    product.crimps = 'Opposite crimps'

                    if (m24H.cornerHeaders.includes(product.moboModel)) {
                        product.instructions = "All 124 - Build from right"
                        product.doubles = '1, 2, 3, 12 - 124/55, 124/55, 124/64, 124/55 - bottom, bottom, top, bottom'
                        product.combs = "1 comb"
                    } else if (m24H.offsetHeaders.includes(product.moboModel) || m24H.middleHeaders.includes(product.moboModel)) {
                        product.instructions = "Start at 148 - Build from right"
                        product.doubles = '1, 2, 3, 12 - 148/55, 148/55, 148/64, 148/55 - bottom, bottom, top, bottom'
                        product.combs = "1 comb"
                    }
                }

                // NR200 / S610 24
                else if (product.title === 'Cooler Master NR200 24 Pin Paracord Custom Sleeved Cable' || product.title === 'Sliger S610/S620 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Male'
                    product.doubles = 'No doubles'
                    product.combs = "3 combs"
                    if (m24H.cornerHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 208 - Red Box - Build from right'
                    } else if (m24H.offsetHeaders.includes(product.moboModel) || m24H.middleHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 202 - Red Box - Build from right'
                    }
                }

                // NCASE 24
                else if (product.title === 'NCASE M1 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Male'
                    product.doubles = 'No doubles'
                    product.combs = "3 combs"
                    if (m24H.cornerHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 202 - Red Box - Build from right'
                    } else if (m24H.offsetHeaders.includes(product.moboModel) || m24H.middleHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 190 - Red Box - Build from right'
                    }
                }

                // MESHLICIOUS 24
                else if (product.title === 'SSUPD Meshlicious 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = '1, 2, 3, 12 - 280/55, 280/55, 280/64, 280/55 - bottom, bottom, top, bottom'
                    product.instructions = 'All 280 except for top wire in box 1 (290) - 2 wires in box 5 - Build from right - Cooler Master build'
                    product.combs = "4 combs"
                }

                // H2O 24
                else if (product.title === 'Lian Li x DAN A4-H2O 24 Pin Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.doubles = '1, 2, 3, 12 - 280/55, 280/55, 280/64, 270/55 - bottom, bottom, top, bottom'
                    product.instructions = 'All 280 except for top wire in box 11 and both wires in box 12 (270) - Build from right - Cooler Master build'
                    product.combs = "1 comb"
                }

                // EPS

                // sandwich EPS
                else if (sCG.sleevedEPSGroupOne.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.combs = "3 combs"
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 256 - Colors: 4, 3, 2, 1'
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.instructions = 'Start at 286 - Colors: 4, 3, 2, 1'
                    }
                }

                // NCASE / S610 EPS
                else if (product.title === 'NCASE M1 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable' || product.title === 'Sliger S610/S620 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable') {
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '500/494 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '518/512 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.impact.includes(product.moboModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '244/226, 238/220, 232/214, 226/208 - Colors: 1, 2, 3, 4 - Long on bottom'
                        product.combs = "3 combs"
                    }
                }

                // NR200 EPS
                else if (product.title === 'Cooler Master NR200 8 (4+4) pin CPU/EPS Paracord Custom Sleeved Cable') {
                    if (mEH.insideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '518/512 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.outsideHeaders.includes(product.moboModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '536/530 - Colors: 4, 3, 2, 1 - With cross'
                        product.combs = "5 combs"
                    } else if (mEH.impact.includes(product.moboModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '244/226, 238/220, 232/214, 226/208 - Colors: 1, 2, 3, 4 - Long on bottom'
                        product.combs = "3 combs"
                    }
                }

                // MESHLICIOUS EPS
                else if (product.title === 'SSUPD Meshlicious 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '380/374 - Colors: 4, 3, 2, 1 - No cross'
                    product.combs = "4 combs"
                }

                // H2O EPS
                else if (product.title === 'Lian Li x DAN A4-H2O 8 (4+4) Pin CPU/EPS Paracord Custom Sleeved Cable') {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '420/414 - Colors: 4, 3, 2, 1 - No cross'
                    product.combs = "4 combs"
                }

                //8&6 PCIE
                // Sandwich PCIE + Meshlicious
                else if (sCG.sleevedPCIEGroupOne.includes(product.title) || product.title === 'Sliger SM550/SM560/SM570/SM580 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Sliger SM550/SM560/SM570/SM580 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.instructions = 'All 304'
                    product.doubles = 'Bottom left double - #1 is double'
                    product.combs = "3 combs"
                }

                else if (sCG.sleevedPCIEGroupTwo.includes(product.title)) {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '244/220 - Long on bottom - Cross then 2 combs'
                        product.doubles = 'Bottom right double - #4 is double'
                        product.combs = "2 combs"
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = 'All 232'
                        product.doubles = 'Bottom left double - #1 is double'
                        product.combs = "2 combs"
                    }
                }

                else if (sCG.sleevedPCIEGroupThree.includes(product.title)) {
                    if (product.gpuCableRouting === 'Around end of GPU (for use with a side mounted radiator)') {
                        product.crimps = 'Opposite crimps'
                        product.instructions = 'All 304'
                        product.doubles = 'Bottom left double - #1 is double'
                        product.combs = "3 combs"
                    } else if (product.gpuCableRouting === 'Over GPU Backplate') {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.crimps = 'Same crimps - Female'
                            product.instructions = '178/160 - Long on bottom - Cross then 2 combs'
                            product.doubles = 'Bottom right double - #4 is double'
                            product.combs = "2 combs"
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.crimps = 'Opposite crimps'
                            product.instructions = '160/154 - Long on top'
                            product.doubles = 'Bottom left double - #1 is double'
                            product.combs = "2 combs"
                        }
                    } else if (product.gpuMountPosition?.includes('Vertical GPU')) {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.crimps = 'Same crimps - Female'
                            product.instructions = '244/220 - Long on bottom - Cross then 2 combs'
                            product.doubles = 'Bottom right double - #4 is double'
                            product.combs = "2 combs"
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.crimps = 'Opposite crimps'
                            product.instructions = 'All 232'
                            product.doubles = 'Bottom left double - #1 is double'
                            product.combs = "2 combs"
                        }
                    }
                }

                else if (product.title === 'NCASE M1 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'NCASE M1 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.crimps = 'Same crimps - Female'
                        product.instructions = '178/160 - Long on bottom - Cross then 2 combs'
                        product.doubles = 'Bottom right double - #4 is double'
                        product.combs = "2 combs"
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.crimps = 'Opposite crimps'
                        product.instructions = '160/154 - Long on top'
                        product.doubles = 'Bottom left double - #1 is double'
                        product.combs = "2 combs"
                    }
                }

                else if (product.title === 'Lian Li x DAN A4-H2O 8 (6+2) Pin PCIE Paracord Custom Sleeved Cable' || product.title === 'Lian Li x DAN A4-H2O 6 Pin PCIE Paracord Custom Sleeved Cable') {
                    product.crimps = 'Opposite crimps'
                    product.instructions = 'All 148'
                    product.doubles = 'Bottom left double - #1 is double'
                    product.combs = "2 combs"
                }

                // SATA
                else if (sCG.sleevedSATAGroupOne.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '100 - Cooler Master'
                    product.combs = "1 comb"
                } else if (sCG.sleevedSATAGroupTwo.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = '148 - Cooler Master'
                    product.combs = "1 comb"
                } else if (product.title === 'SSUPD Meshlicious SATA Power Paracord Custom Sleeved Cable') {
                    // length is provided by customer
                    product.instructions = 'Cooler Master SATA build'
                    product.crimps = 'Same crimps - Female'
                    product.combs = "1 comb for every 100mm in length"
                }

                // DUAL SATA
                else if (sCG.sleevedDualSATAGroupOne.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = 'Dual SATA - 100 - Cooler Master'
                    product.combs = "1 comb"
                    product.doubles = '5 doubles'
                } else if (sCG.sleevedDualSATAGroupTwo.includes(product.title)) {
                    product.crimps = 'Same crimps - Female'
                    product.instructions = 'Dual SATA - 148 - Cooler Master'
                    product.combs = "1 comb"
                    product.doubles = '5 doubles'
                }
            }

            // next PSU model here

            // logic for sleeved extensions
            if (product.title.includes("Create Your Own")) {
                product.crimps = 'Same crimps - Male'
                product.combs = "3 combs"
                if (product.title === "Create Your Own 24 Pin Extension Cable") {
                    if (product.variant_title === "200mm") {
                        product.instructions = "202/184 - Latch down, long on top"
                    } else if (product.variant_title === "250mm") {
                        product.instructions = "250/232 - Latch down, long on top"
                    } else if (product.variant_title === "300mm") {
                        product.instructions = "304/286 - Latch down, long on top"
                    }
                } else if (product.title === "Create Your Own 8 Pin/4+4 Pin CPU/EPS Extension Cable") {
                    if (product.variant_title === "200mm") {
                        product.instructions = "202/184 - Latch down, long on top - 4+4 and 8 EPS male connectors"
                    } else if (product.variant_title === "250mm") {
                        product.instructions = "250/232 - Latch down, long on top - 4+4 and 8 EPS male connectors"
                    } else if (product.variant_title === "300mm") {
                        product.instructions = "304/286 - Latch down, long on top - 4+4 and 8 EPS male connectors"
                    }
                } else if (product.title === "Create Your Own 8 Pin PCIE Extension Cable" || product.title === "Create Your Own 6 Pin PCIE Extension Cable") {
                    if (product.variant_title === "200mm") {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.instructions = "202/184 - Latch down, long on top"
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.instructions = "202/184 - Latch UP, long on top"
                        }
                    } else if (product.variant_title === "250mm") {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.instructions = "250/232 - Latch down, long on top"
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.instructions = "250/232 - Latch UP, long on top"
                        }
                    } else if (product.variant_title === "300mm") {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.instructions = "304/286 - Latch down, long on top"
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.instructions = "304/286 - Latch UP, long on top"
                        }
                    }
                    // if (gCD.fanClips.includes(product.gpuModel)) {
                    //     product.crimps = 'Same crimps - Female'
                    //     product.instructions = '244/220 - Long on bottom - Cross then 2 combs'
                    //     product.doubles = 'Bottom right double - #4 is double'
                    //     product.combs = "2 combs"
                    // } else if (gCD.backplateClips.includes(product.gpuModel)) {
                    //     product.crimps = 'Opposite crimps'
                    //     product.instructions = 'All 232'
                    //     product.doubles = 'Bottom left double - #1 is double'
                    //     product.combs = "2 combs"
                    // }
                }
            }
        })
    })
    return orders
}

module.exports = updateSleeved;
