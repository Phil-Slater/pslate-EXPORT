const uCG = require('./unsleevedCableGroups')
const gCD = require('./gpuClipDirections')
const vhpwrUnsleeved = require('./instructionLogic/unsleeved/vhpwrUnsleeved')

function updateUnsleeved(orders) {
    orders.forEach(order => {
        order.line_items.forEach(product => {

            // 12VHPWR
            if (product.title === 'Nvidia 12VHPWR PCIE Unsleeved Custom Cable') {
                vhpwrUnsleeved(product)
            }

            // UNSLEEVED 12 PINS - Siverstone / Cooler Master / EVGA PSUs
            if (product.title === 'Nvidia 12 Pin PCIE Unsleeved Custom Cable') {
                if (product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT' || product.psuModel === 'EVGA 450/550/650/750/850 GM' || product.psuModel === 'Silverstone SX800-LTI/NJ450-SXL/Lian Li PE-750') {
                    if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O' || product.case === 'Dan C4') {
                        if (product.gpuModel === 'RTX 3090 Ti') {
                            product.instructions = '300 Silverstone 12 pin - 3x 8 pin build'
                        } else {
                            product.instructions = '300 Silverstone 12 pin'
                        }
                    } else if (product.case === 'Cooler Master NR200p MAX' || product.case === 'Lazer3D LZ7 XTD' || product.case === 'XTIA Xproto') {
                        if (product.gpuModel === 'RTX 3090 Ti') {
                            product.instructions = '360 Silverstone 12 pin - 3x 8 pin build'
                        } else {
                            product.instructions = '360 Silverstone 12 pin'
                        }
                    } else if (product.gpuModel === 'RTX 3060 Ti Founders Edition' || product.gpuModel === 'RTX 3070 Founders Edition') {
                        product.instructions = '360 Silverstone 12 pin'
                    } else if (product.gpuModel === 'RTX 3080/3070 Ti/3080 Ti Founders Edition') {
                        if (uCG.unsleeved12PCIECaseGroupOne3080Silverstone.includes(product.case)) {
                            product.instructions = '300 Silverstone 12 pin'
                        } else if (uCG.unsleeved12PCIECaseGroupTwo3080Silverstone.includes(product.case)) {
                            product.instructions = '360 Silverstone 12 pin'
                        }
                    } else if (product.gpuModel === 'RTX 3090 Founders Edition') {
                        if (uCG.unsleeved12PCIECaseGroupOne3090Silverstone.includes(product.case)) {
                            product.instructions = '360 Silverstone 12 pin'
                        } else if (uCG.unsleeved12PCIECaseGroupTwo3090Silverstone.includes(product.case)) {
                            product.instructions = '400 Silverstone 12 pin'
                        }
                    } else if (product.gpuModel === 'RTX 3090 Ti') {
                        if (uCG.unsleeved12PCIECaseGroupOne3090Silverstone.includes(product.case)) {
                            product.instructions = '360 Silverstone 12 pin - 3x 8 pin build'
                        } else if (uCG.unsleeved12PCIECaseGroupTwo3090Silverstone.includes(product.case)) {
                            product.instructions = '400 Silverstone 12 pin - 3x 8 pin build'
                        }
                    }
                }

                else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX' || product.psuModel === 'Silverstone SX750/SX1000') {
                    if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O' || product.case === 'Dan C4') {
                        if (product.gpuModel === 'RTX 3090 Ti') {
                            product.instructions = '300 Cooler Master 12 pin - 3x 8 pin build'
                        } else {
                            product.instructions = '300 Cooler Master 12 pin'
                        }
                    } else if (product.case === 'Cooler Master NR200p MAX' || product.case === 'Lazer3D LZ7 XTD' || product.case === 'XTIA Xproto') {
                        if (product.gpuModel === 'RTX 3090 Ti') {
                            product.instructions = '360 Cooler Master 12 pin - 3x 8 pin build'
                        } else {
                            product.instructions = '360 Cooler Master 12 pin'
                        }
                    } else if (product.gpuModel === 'RTX 3060 Ti Founders Edition' || product.gpuModel === 'RTX 3070 Founders Edition') {
                        product.instructions = '360 Cooler Master 12 pin'
                    } else if (product.gpuModel === 'RTX 3080/3070 Ti/3080 Ti Founders Edition') {
                        if (uCG.unsleeved12PCIECaseGroupOne3080Silverstone.includes(product.case)) {
                            product.instructions = '300 Cooler Master 12 pin'
                        } else if (uCG.unsleeved12PCIECaseGroupTwo3080Silverstone.includes(product.case)) {
                            product.instructions = '360 Cooler Master 12 pin'
                        }
                    } else if (product.gpuModel === 'RTX 3090 Founders Edition') {
                        if (uCG.unsleeved12PCIECaseGroupOne3090Silverstone.includes(product.case)) {
                            product.instructions = '360 Cooler Master 12 pin'
                        } else if (uCG.unsleeved12PCIECaseGroupTwo3090Silverstone.includes(product.case)) {
                            product.instructions = '400 Cooler Master 12 pin'
                        }
                    } else if (product.gpuModel === 'RTX 3090 Ti') {
                        if (uCG.unsleeved12PCIECaseGroupOne3090Silverstone.includes(product.case)) {
                            product.instructions = '360 Cooler Master 12 pin - 3x 8 pin build'
                        } else if (uCG.unsleeved12PCIECaseGroupTwo3090Silverstone.includes(product.case)) {
                            product.instructions = '400 Cooler Master 12 pin - 3x 8 pin build'
                        }
                    }
                }
            }

            // CYOL
            if (product.title === '24 Pin ATX Unsleeved Custom Cable - Choose Your Length') {
                if (product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum') {
                    product.instructions = 'Corsair pinout - 19 single wires; 8 wires for doubles - 24, 10, and 18 connectors'
                } else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX') {
                    product.instructions = 'Cooler Master pinout - 19 single wires; 8 wires for doubles - 24, 10, and 18 connectors'
                } else if (product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT') {
                    product.instructions = 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT pinout - 19 single wires; 8 wires for doubles - 2x 24 and 4 pin connectors'
                } else if (product.psuModel === 'Silverstone SX700-LPT(SFX-L)/ST45SF/SX600-G/Lian Li PE-550') {
                    product.instructions = 'Silverstone SX700-LPT(SFX-L)/ST45SF/SX600-G/Lian Li PE-550 pinout - 23 single wires; no doubles - 2x 24 pin connectors'
                } else if (product.psuModel === 'Silverstone SX800-LTI/NJ450-SXL/Lian Li PE-750') {
                    product.instructions = 'Silverstone SX800-LTI/NJ450-SXL/Lian Li PE-750 pinout - 19 single wires; 8 wires for doubles - 2x 24 and 4 pin connectors'
                } else if (product.psuModel === 'Silverstone SX750') {
                    product.instructions = 'Silverstone SX750 pinout - 20 single wires; 6 wires for doubles - 2x 24 and 4 pin connectors'
                } else if (product.psuModel === 'Silverstone SX1000') {
                    product.instructions = 'Silverstone SX1000 pinout - 20 single wires; 6 wires for doubles - 2x 24 and 4 pin connectors'
                } else if (product.psuModel === 'EVGA 450/550/650/750/850 GM') {
                    product.instructions = 'EVGA pinout - 18 single wires; 10 wires for doubles - 24, 10, and 18 connectors'
                } else if (product.psuModel === 'Seasonic Focus SGX-450/SGX-500/SGX-650/SGX-750/SPX-750' || product.psuModel === 'Fractal Ion SFX-L 500W/650W') {
                    product.instructions = 'Seasonic pinout - 19 single wires; 8 wires for doubles - 24, 10, and 18 connectors'
                } else if (product.psuModel === 'Lian-Li SP750') {
                    product.instructions = 'Lian-Li SP750 pinout - 20 single wires; 6 wires for doubles - 24, 10, and 18 connectors'
                }
            }

            else if (product.title === '8 (4+4) Pin CPU/EPS Unsleeved Custom Cable - Choose Your Length') {
                if (product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum' || product.psuModel === 'Lian-Li SP750') {
                    product.instructions = 'Opposite crimps - No cross - 4+4 and 8 EPS connectors'
                } else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX' || product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT' || product.psuModel === 'Silverstone SX700-LPT(SFX-L)/ST45SF/SX600-G/Lian Li PE-550' || product.psuModel === 'Silverstone SX800-LTI/NJ450-SXL/Lian Li PE-750' || product.psuModel === 'Silverstone SX750' || product.psuModel === 'Silverstone SX1000' || product.psuModel === 'EVGA 450/550/650/750/850 GM') {
                    product.instructions = 'Double outside crimps - No cross - 4+4 and 8 EPS connectors'
                } else if (product.psuModel === 'Seasonic Focus SGX-450/SGX-500/SGX-650/SGX-750/SPX-750' || product.psuModel === 'Fractal Ion SFX-L 500W/650W') {
                    product.instructions = 'Opposite crimps - No cross - 4+4 and FULL 8 PCIE connectors'
                }
            }

            else if (product.title === '8 (6+2) Pin PCIE Unsleeved Custom Cable - Choose Your Length' || product.title === '6 Pin PCIE Unsleeved Custom Cable - Choose Your Length') {
                if (product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum' || product.psuModel === 'Lian-Li SP750') {
                    product.instructions = 'Double outside crimps - Top right double - 6+2 and 8 pin EPS connectors - Corsair Type 1 PCIE build'
                } else if (product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT' || product.psuModel === 'Silverstone SX700-LPT(SFX-L)/ST45SF/SX600-G/Lian Li PE-550' || product.psuModel === 'Silverstone SX800-LTI/NJ450-SXL/Lian Li PE-750' || product.psuModel === 'EVGA 450/550/650/750/850 GM') {
                    product.instructions = 'Double outside crimps - No double - 6+2 and FULL 8 PCIE connectors - Silverstone Type 1 PCIE build'
                } else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX' || product.psuModel === 'Silverstone SX750' || product.psuModel === 'Silverstone SX1000') {
                    product.instructions = 'Opposite crimps - Bottom left double - 6+2 and 8 EPS connectors - Cooler Master Type 1 PCIE build'
                } else if (product.psuModel === 'Seasonic Focus SGX-450/SGX-500/SGX-650/SGX-750/SPX-750' || product.psuModel === 'Fractal Ion SFX-L 500W/650W') {
                    product.instructions = 'Double outside crimps - Top right double - 6+2 and FULL 8 PCIE connectors - Corsair Type 1 PCIE build (with full 8 PCIE connector instead of EPS)'
                }
            }

            else if (product.title === 'Single SATA Power Unsleeved Custom Cable - Choose Your Length') {
                if (product.psuModel) {
                    const splitPsuModel = product.psuModel.split(" ")
                    product.instructions = `${splitPsuModel[0]} SATA build`
                }
                if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX') {
                    product.instructions = 'Cooler Master SATA build'
                } else if (product.psuModel === 'Fractal Ion SFX-L 500W/650W') {
                    product.instructions = 'Seasonic SATA build'
                }
            }

            else if (product.title === 'Molex Power Unsleeved Custom Cable - Choose Your Length') {
                if (product.psuModel) {
                    const splitPsuModel = product.psuModel.split(" ")
                    product.instructions = `${splitPsuModel[0]} Molex build`
                }
                if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX') {
                    product.instructions = 'Cooler Master Molex build'
                } else if (product.psuModel === 'Fractal Ion SFX-L 500W/650W') {
                    product.instructions = 'Seasonic Molex build'
                }
            }

            else if (product.title === '12 Pin PCIE Unsleeved Custom Cable - Choose Your Length') {
                if (product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum' || product.psuModel === 'Lian-Li SP750') {
                    if (product.gpuModel === 'RTX 3090 Ti') {
                        product.instructions = 'Double outside crimps - 12 pin and 3x 8 EPS connectors - 4 wires per 8 pin'
                    } else {
                        product.instructions = 'Double outside crimps - 12 pin and 2x 8 EPS connectors - Corsair Type 1 6 pin build'
                    }
                } else if (product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT' || product.psuModel === 'Silverstone SX700-LPT(SFX-L)/ST45SF/SX600-G/Lian Li PE-550' || product.psuModel === 'Silverstone SX800-LTI/NJ450-SXL/Lian Li PE-750' || product.psuModel === 'EVGA 450/550/650/750/850 GM') {
                    if (product.gpuModel === 'RTX 3090 Ti') {
                        product.instructions = 'Double outside crimps - 12 pin and 3x FULL 8 PCIE connectors - 4 wires per 8 pin'
                    } else {
                        product.instructions = 'Double outside crimps - 12 pin and 2x FULL 8 PCIE connectors - Silverstone Type 1 6 pin build'
                    }
                } else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX' || product.psuModel === 'Silverstone SX750' || product.psuModel === 'Silverstone SX1000') {
                    if (product.gpuModel === 'RTX 3090 Ti') {
                        product.instructions = 'Double outside crimps - 12 pin and 3x 8 EPS connectors - 4 wires per 8 pin - With cross'
                    } else {
                        product.instructions = 'Double outside crimps - 12 pin and 2x 8 EPS connectors - 1:1 with cross (top left and bottom left ports on EPS left open)'
                    }
                } else if (product.psuModel === 'Seasonic Focus SGX-450/SGX-500/SGX-650/SGX-750/SPX-750' || product.psuModel === 'Fractal Ion SFX-L 500W/650W') {
                    if (product.gpuModel === 'RTX 3090 Ti') {
                        product.instructions = 'Double outside crimps - 12 pin and 3x FULL 8 PCIE connectors - 4 wires per 8 pin'
                    } else {
                        product.instructions = 'Double outside crimps - 12 pin and 2x FULL 8 PCIE connectors - Corsair Type 1 6 pin build (with full 8 PCIE connector instead of EPS)'
                    }
                }
            }

            // CORSAIR
            else if (product.psuModel === 'Corsair SF450/SF600/SF750 Gold/Platinum') {

                // 24 PIN
                if (uCG.unsleeved24GroupOne.includes(product.title)) {
                    product.instructions = "160 - 24 pin - Corsair Type 1"
                    if (product.t1RotatedPsu) {
                        product.instructions = "180 - 24 pin - Corsair Type 3"
                    }
                } else if (product.title === 'NCASE M1 24 Pin Unsleeved Custom Cable') {
                    product.instructions = "170 - 24 pin - Corsair Type 2"
                } else if (uCG.unsleeved24GroupTwo.includes(product.title)) {
                    product.instructions = "200 - 24 pin - Corsair Type 2"
                } else if (product.title === 'SSUPD Meshlicious 24 Pin Unsleeved Custom Cable') {
                    product.instructions = "290 - 24 pin - Corsair Meshlicious"
                } else if (product.title === 'XTIA Xproto 24 Pin Unsleeved Custom Cable') {
                    product.instructions = "180 - 24 pin - Corsair Type 3"
                } else if (product.title === 'Lian Li x DAN A4-H2O 24 Pin Unsleeved Custom Cable') {
                    product.instructions = "290 **CURVED** - 24 pin - Corsair Type 1"
                }

                // EPS
                else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
                    product.instructions = "265 - EPS - Corsair Type 1"
                } else if (product.moboModel == 'Asus ROG Crosshair VIII Impact' && uCG.unsleevedEPSImpactGroup.includes(product.title)) {
                    product.instructions = "200 - EPS - Corsair Type 2"
                } else if (uCG.unsleevedEPSGroupTwo.includes(product.title)) {
                    product.instructions = "360 - EPS - Corsair Meshlicious"
                } else if (product.title === 'Lian Li x DAN A4-H2O 8 (4+4) Pin CPU/EPS Unsleeved Custom Cable' || product.title === 'DAN Cases C4-SFX 8 (4+4) Pin CPU/EPS Unsleeved Custom Cable') {
                    product.instructions = "420 - EPS - Corsair Type 1"
                }

                // 8 & 6 PCIE
                else if (uCG.unsleevedPCIEGroupOne.includes(product.title)) {
                    product.instructions = "300 - PCIE - Corsair Type 1"
                } else if (uCG.unsleevedPCIEGroupTwo.includes(product.title)) {
                    if (product.gpuCableRouting === 'Around end of GPU (for use with a side mounted radiator)') {
                        product.instructions = "300 - PCIE - Corsair Type 1"
                    } else if (product.gpuCableRouting === 'Over GPU Backplate') {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.instructions = '180/165 - PCIE - Corsair Type 2'
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.instructions = '180/175 - PCIE - Corsair Type 2'
                        }
                    } else if (product.gpuMountPosition?.includes('Vertical GPU')) {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.instructions = '240/215 - PCIE - Corsair Type 1'
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.instructions = '240 - PCIE - Corsair Type 1'
                        }
                    }
                } else if (uCG.unsleevedPCIEGroupThree.includes(product.title)) {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.instructions = '240/215 - PCIE - Corsair Type 1'
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.instructions = '240 - PCIE - Corsair Type 1'
                    }
                } else if (product.title === 'Lian Li x DAN A4-H2O 8 (6+2) Pin PCIE Unsleeved Custom Cable' || product.title === 'Lian Li x DAN A4-H2O 6 Pin PCIE Unsleeved Custom Cable') {
                    product.instructions = '150 - PCIE - Corsair Type 1'
                } else if (product.title === 'NCASE M1 8 (6+2) Pin PCIE Unsleeved Custom Cable' || product.title === 'NCASE M1 6 Pin PCIE Unsleeved Custom Cable' || product.title === 'DAN Cases C4-SFX 8 (6+2) Pin PCIE Unsleeved Custom Cable' || product.title === 'DAN Cases C4-SFX 6 Pin PCIE Unsleeved Custom Cable') {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.instructions = '180/165 - PCIE - Corsair Type 2'
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.instructions = '180/175 - PCIE - Corsair Type 2'
                    }
                }
                // 12 PCIE
                else if (product.title === 'Nvidia 12 Pin PCIE Unsleeved Custom Cable') {
                    if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O' || product.case === 'Dan C4') {
                        if (product.gpuModel === 'RTX 3090 Ti') {
                            product.instructions = '300 - Corsair 12 pin - 3x 8 pin build'
                        } else {
                            product.instructions = '300 - Corsair 12 pin'
                        }
                    } else if (product.gpuModel === 'RTX 3060 Ti Founders Edition') {
                        product.instructions = '360 - Corsair 12 pin'
                    } else if (product.gpuModel === 'RTX 3070 Founders Edition') {
                        product.instructions = '360 - Corsair 12 pin'
                    } else if (product.gpuModel === 'RTX 3080/3070 Ti/3080 Ti Founders Edition') {
                        if (uCG.unsleeved12PCIECaseGroupOne3080Corsair.includes(product.case)) {
                            product.instructions = '300 - Corsair 12 pin'
                        } else if (uCG.unsleeved12PCIECaseGroupTwo3080Corsair.includes(product.case)) {
                            product.instructions = '360 - Corsair 12 pin'
                        }
                    } else if (product.gpuModel === 'RTX 3090 Founders Edition') {
                        if (uCG.unsleeved12PCIECaseGroupOne3090Corsair.includes(product.case)) {
                            product.instructions = '400 - Corsair 12 pin'
                        } else if (uCG.unsleeved12PCIECaseGroupTwo3090Corsair.includes(product.case)) {
                            product.instructions = '360 - Corsair 12 pin'
                        }
                    } else if (product.gpuModel === 'RTX 3090 Ti') {
                        if (uCG.unsleeved12PCIECaseGroupOne3090Corsair.includes(product.case)) {
                            product.instructions = '400 - Corsair 12 pin - 3x 8 pin build'
                        } else if (uCG.unsleeved12PCIECaseGroupTwo3090Corsair.includes(product.case)) {
                            product.instructions = '360 - Corsair 12 pin - 3x 8 pin build'
                        }
                    }
                }

                // SATA
                else if (uCG.unsleevedSATAGroupOne.includes(product.title)) {
                    product.instructions = "Single SATA - 100 - Corsair"
                } else if (uCG.unsleevedSATAGroupTwo.includes(product.title)) {
                    product.instructions = "Single SATA - 150 - Corsair"
                } else if (product.title === 'DAN Cases C4-SFX SATA Power Unsleeved Custom Cable') {
                    product.instructions = "Single SATA - 200 - Corsair"
                }

                // DUAL SATA
                else if (uCG.unsleevedDualSATAGroupOne.includes(product.title)) {
                    product.instructions = "Dual SATA - 80 - Corsair"
                } else if (uCG.unsleevedDualSATAGroupTwo.includes(product.title)) {
                    product.instructions = "Dual SATA - 150 - Corsair"
                } else if (product.title === 'DAN Cases C4-SFX Dual SATA Power Unsleeved Custom Cable') {
                    product.instructions = "Dual SATA - 200 - Corsair"
                }
            }

            // SILVERSTONE
            else if (product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT') {

                // 24 PIN
                if (uCG.unsleeved24GroupOne.includes(product.title)) {
                    product.instructions = "160 - 24 pin - Silverstone Type 1"
                    if (product.t1RotatedPsu) {
                        product.instructions = "90 Degree Rotated Silverstone -- need length from Phil!"
                    }
                } else if (product.title === 'NCASE M1 24 Pin Unsleeved Custom Cable') {
                    product.instructions = "230 - 24 pin - Silverstone Type 2"
                } else if (uCG.unsleeved24GroupTwo.includes(product.title)) {
                    product.instructions = "260 - 24 pin - Silverstone Type 2"
                } else if (product.title === 'XTIA Xproto 24 Pin Unsleeved Custom Cable') {
                    product.instructions = "130 - 24 pin - Silverstone Type 3"
                }

                //EPS
                else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
                    product.instructions = "280 - EPS - Silverstone Type 1"
                } else if (uCG.unsleeved24GroupTwo.includes(product.title)) {
                    product.instructions = "360 - EPS - Silverstone Type 2/3"
                } else if (product.moboModel == 'Asus ROG Crosshair VIII Impact' && uCG.unsleevedEPSImpactGroup.includes(product.title)) {
                    product.instructions = "210 - EPS - Silverstone Type 2"
                } else if (product.title === 'DAN Cases C4-SFX 8 (4+4) Pin CPU/EPS Unsleeved Custom Cable') {
                    product.instructions = "420 - EPS - Silverstone Type 2/3"
                }

                // 8 & 6 PCIE
                else if (uCG.unsleevedPCIEGroupOne.includes(product.title) || uCG.unsleevedPCIEGroupThree.includes(product.title)) {
                    product.instructions = "300 - PCIE - Silverstone Type 1"
                } else if (uCG.unsleevedPCIEGroupTwo.includes(product.title)) {
                    if (product.gpuCableRouting === 'Around end of GPU (for use with a side mounted radiator)') {
                        product.instructions = "300 - PCIE - Silverstone Type 1"
                    } else if (product.gpuCableRouting === 'Over GPU Backplate') {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.instructions = '155/150 - PCIE - Silverstone Type 2'
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.instructions = '170/155 - PCIE - Silverstone Type 2'
                        }
                    } else if (product.gpuMountPosition?.includes('Vertical GPU')) {
                        product.instructions = "300 - PCIE - Silverstone Type 1"
                        // not currently checking for fan vs backplate clips with silverstone psu in this group
                        // if (gCD.fanClips.includes(product.gpuModel)) {
                        //     product.instructions = ''
                        // } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        //     product.instructions = ''
                        // }
                    }
                } else if (product.title === 'NCASE M1 8 (6+2) Pin PCIE Unsleeved Custom Cable' || product.title === 'NCASE M1 6 Pin PCIE Unsleeved Custom Cable' || product.title === 'DAN Cases C4-SFX 6 Pin PCIE Unsleeved Custom Cable' || product.title === 'DAN Cases C4-SFX 8 (6+2) Pin PCIE Unsleeved Custom Cable') {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.instructions = '155/150 - PCIE - Silverstone Type 2'
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.instructions = '170/155 - PCIE - Silverstone Type 2'
                    }
                }

                // SATA
                else if (uCG.unsleevedSATAGroupOne.includes(product.title)) {
                    product.instructions = "Single SATA - 100 - Silverstone"
                } else if (uCG.unsleevedSATAGroupTwo.includes(product.title)) {
                    product.instructions = "Single SATA - 150 - Silverstone"
                } else if (product.title === 'DAN Cases C4-SFX SATA Power Unsleeved Custom Cable') {
                    product.instructions = "Single SATA - 200 - Silverstone"
                }


                // DUAL SATA
                else if (uCG.unsleevedDualSATAGroupOne.includes(product.title)) {
                    product.instructions = "Dual SATA - 80 - Silverstone"
                } else if (uCG.unsleevedDualSATAGroupTwo.includes(product.title)) {
                    product.instructions = "Dual SATA - 150 - Silverstone"
                } else if (product.title === 'DAN Cases C4-SFX Dual SATA Power Unsleeved Custom Cable') {
                    product.instructions = "Dual SATA - 200 - Silverstone"
                }
            }

            // COOLER MASTER
            else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX') {

                // 24 PIN
                if (uCG.unsleeved24GroupOne.includes(product.title)) {
                    product.instructions = "140 - 24 pin - Cooler Master Type 1"
                    if (product.t1RotatedPsu) {
                        product.instructions = "160 - 24 pin - Cooler Master Type 1"
                    }
                } else if (product.title === 'SSUPD Meshlicious 24 Pin Unsleeved Custom Cable') {
                    product.instructions = "280/290 - 24 pin - Cooler Master Meshlicious"
                } else if (uCG.unsleeved24GroupTwo.includes(product.title) || product.title === 'NCASE M1 24 Pin Unsleeved Custom Cable') {
                    product.instructions = "200 - 24 pin - Cooler Master Type 2"
                } else if (product.title === 'Lian Li x DAN A4-H2O 24 Pin Unsleeved Custom Cable') {
                    product.instructions = 'Cooler Master 270/260 - 24 pin - Cooler Master build - all wires 270 except for top wire in box 11 and both wires in box 12 (260)'
                }

                // EPS
                else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
                    product.instructions = "280 - EPS - Silverstone Type 1"
                } else if (uCG.unsleevedEPSGroupTwo.includes(product.title)) {
                    product.instructions = "360 - EPS - Silverstone Type 2/3"
                } else if (product.title === 'Lian Li x DAN A4-H2O 8 (4+4) Pin CPU/EPS Unsleeved Custom Cable' || product.title === 'DAN Cases C4-SFX 8 (4+4) Pin CPU/EPS Unsleeved Custom Cable') {
                    product.instructions = '420 - EPS - Silverstone Type 1 (double outside, no cross)'
                }

                // 8 & 6 PCIE
                else if (uCG.unsleevedPCIEGroupOne.includes(product.title)) {
                    product.instructions = "300 - PCIE - Cooler Master Type 1"
                } else if (uCG.unsleevedPCIEGroupTwo.includes(product.title)) {
                    if (product.gpuCableRouting === 'Around end of GPU (for use with a side mounted radiator)') {
                        product.instructions = "300 - PCIE - Cooler Master Type 1"
                    } else if (product.gpuCableRouting === 'Over GPU Backplate') {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.instructions = '170/155 - PCIE - Cooler Master Type 2'
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.instructions = '160/155 - PCIE - Cooler Master Type 2'
                        }
                    } else if (product.gpuMountPosition?.includes('Vertical GPU')) {
                        if (gCD.fanClips.includes(product.gpuModel)) {
                            product.instructions = '230/205 - PCIE - Cooler Master Type 1'
                        } else if (gCD.backplateClips.includes(product.gpuModel)) {
                            product.instructions = '220 - PCIE - Cooler Master Type 1'
                        }
                    }
                } else if (uCG.unsleevedPCIEGroupThree.includes(product.title)) {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.instructions = '230/205 - PCIE - Cooler Master Type 1'
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.instructions = '220 - PCIE - Cooler Master Type 1'
                    }
                } else if (product.title === 'NCASE M1 8 (6+2) Pin PCIE Unsleeved Custom Cable' || product.title === 'NCASE M1 6 Pin PCIE Unsleeved Custom Cable' || product.title === 'DAN Cases C4-SFX 8 (6+2) Pin PCIE Unsleeved Custom Cable' || product.title === 'DAN Cases C4-SFX 6 Pin PCIE Unsleeved Custom Cable') {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.instructions = '170/155 - PCIE - Cooler Master Type 2'
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.instructions = '160/155 - PCIE - Cooler Master Type 2'
                    }
                } else if (product.title === 'Lian Li x DAN A4-H2O 8 (6+2) Pin PCIE Unsleeved Custom Cable' || product.title === 'Lian Li x DAN A4-H2O 6 Pin PCIE Unsleeved Custom Cable') {
                    product.instructions = "150 - PCIE - Cooler Master Type 1 (opposite, bottom left double, no cross)"
                }


                // SATA
                else if (uCG.unsleevedSATAGroupOne.includes(product.title)) {
                    product.instructions = "Single SATA - 100 - Cooler Master"
                } else if (uCG.unsleevedSATAGroupTwo.includes(product.title)) {
                    product.instructions = "Single SATA - 150 - Cooler Master"
                } else if (product.title === 'DAN Cases C4-SFX SATA Power Unsleeved Custom Cable') {
                    product.instructions = "Single SATA - 200 - Cooler Master"
                }


                // DUAL SATA
                else if (uCG.unsleevedDualSATAGroupOne.includes(product.title)) {
                    product.instructions = "Dual SATA - 80 - Cooler Master"
                } else if (uCG.unsleevedDualSATAGroupTwo.includes(product.title)) {
                    product.instructions = "Dual SATA - 150 - Cooler Master"
                } else if (product.title === 'DAN Cases C4-SFX Dual SATA Power Unsleeved Custom Cable') {
                    product.instructions = "Dual SATA - 200 - Cooler Master"
                }
            }

            // EVGA
            else if (product.psuModel === 'EVGA 450/550/650/750/850 GM') {

                // 24 PIN
                if (uCG.unsleeved24GroupOne.includes(product.title)) {
                    product.instructions = "170 - 24 pin - EVGA Type 1"
                    if (product.t1RotatedPsu) {
                        product.instructions = "90 Degree Rotated EVGA -- need length from Phil!"
                    }
                }

                else if (product.title === 'Lian Li x DAN A4-H2O 24 Pin Unsleeved Custom Cable') {
                    product.instructions = 'All 250 - 24 pin - EVGA Build'
                }

                // EPS
                else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
                    product.instructions = "280 - EPS - Silverstone Type 1"
                }

                else if (product.title === 'Lian Li x DAN A4-H2O 8 (4+4) Pin CPU/EPS Unsleeved Custom Cable') {
                    product.instructions = '420 - EPS - Silverstone Type 1 (double outside, no cross)'
                }

                // 8 & 6 PCIE
                else if (uCG.unsleevedPCIEGroupOne.includes(product.title) || uCG.unsleevedPCIEGroupThree.includes(product.title)) {
                    product.instructions = "300 - PCIE - Silverstone Type 1"
                }

                else if (product.title === 'Lian Li x DAN A4-H2O 8 (6+2) Pin PCIE Unsleeved Custom Cable' || product.title === 'Lian Li x DAN A4-H2O 6 Pin PCIE Unsleeved Custom Cable') {
                    product.instructions = "150 - PCIE - Silverstone Type 1 (double outside, Silverstone build)"
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
                    product.instructions = "180 - 24 pin - Lian Li Type 1"
                }

                // EPS
                else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
                    product.instructions = "310 - EPS - Silverstone Type 1 (like 280 Silverstone - Type 1 but longer)"
                }

                // 8 & 6 PCIE
                else if (uCG.unsleevedPCIEGroupOne.includes(product.title) || uCG.unsleevedPCIEGroupThree.includes(product.title)) {
                    product.instructions = "300 - PCIE - Silverstone Type 1"
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

            // Silverstone SX700-LPT
            else if (product.psuModel === 'Silverstone SX700-LPT (SFX-L)') {
                // 24 PIN
                if (uCG.unsleeved24GroupOne.includes(product.title)) {
                    product.instructions = "24 pin - Start at 160 (go down by 5s) - Build from left - 2x 24 pin connectors w/ cross, 23 single wires only (no doubles, one wire in box 8)"
                }

                // EPS
                else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
                    product.instructions = "310 - EPS - Silverstone Type 1 (like 280 Silverstone - Type 1 but longer"
                }

                // 8 & 6 PCIE
                else if (uCG.unsleevedPCIEGroupOne.includes(product.title) || uCG.unsleevedPCIEGroupThree.includes(product.title)) {
                    product.instructions = "300 - PCIE - Silverstone Type 1"
                }

                // SATA
                else if (uCG.unsleevedSATAGroupOne.includes(product.title)) {
                    product.instructions = "Single SATA - 100 - Silverstone"
                }

                // DUAL SATA
                // Not an option for SX700-LPT
            }
        })
    })
    return orders
}

module.exports = updateUnsleeved
