const uCG = require('./unsleevedCableGroups')
const gCD = require('./gpuClipDirections')

function updateUnsleeved(orders) {
    orders.forEach(order => {
        order.line_items.forEach(product => {

            // UNSLEEVED 12 PINS - Siverstone / Cooler Master / EVGA PSUs
            if (product.title === 'Nvidia 12 Pin PCIE Unsleeved Custom Cable') {
                if (product.psuModel === 'Silverstone SX500-G/SX650-G/SX700-G/SX700-PT' || product.psuModel === 'EVGA 450/550/650/750/850 GM' || product.psuModel === 'Silverstone SX800-LTI/NJ450-SXL/Lian Li PE-750') {
                    if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O') {
                        product.instructions = '300 Silverstone 12 pin'
                    } else if (product.case === 'Cooler Master NR200p MAX' || product.case === 'Lazer3D LZ7 XTD' || product.case === 'XTIA Xproto') {
                        product.instructions = '360 Silverstone 12 pin'
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
                    }
                }

                else if (product.psuModel === 'Cooler Master V550/V650/V750/V850 SFX' || product.psuModel === 'Silverstone SX750/SX1000') {
                    if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O') {
                        product.instructions = '300 Cooler Master 12 pin'
                    } else if (product.case === 'Cooler Master NR200p MAX' || product.case === 'Lazer3D LZ7 XTD' || product.case === 'XTIA Xproto') {
                        product.instructions = '360 Cooler Master 12 pin'
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
                    }
                }
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
                } else if (product.title === 'Lian Li x DAN A4-H2O 24 Pin Unsleeved Custom Cable') {
                    product.instructions = "295 - Corsair Type 1"
                }

                // EPS
                else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
                    product.instructions = "265 - Corsair Type 1"
                } else if (product.moboModel == 'Asus ROG Crosshair VIII Impact' && uCG.unsleevedEPSImpactGroup.includes(product.title)) {
                    product.instructions = "200 - Corsair Type 2"
                } else if (uCG.unsleevedEPSGroupTwo.includes(product.title)) {
                    product.instructions = "360 - Corsair Meshlicious"
                } else if (product.title === 'Lian Li x DAN A4-H2O 8 (4+4) Pin CPU/EPS Unsleeved Custom Cable') {
                    product.instructions = "420 - Corsair Type 1"
                }

                // 8 & 6 PCIE
                else if (uCG.unsleevedPCIEGroupOne.includes(product.title)) {
                    product.instructions = "300 - Corsair Type 1"
                } else if (uCG.unsleevedPCIEGroupTwo.includes(product.title)) {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.instructions = '180/165 - Corsair Type 2'
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.instructions = '180/175 - Corsair Type 2'
                    }
                } else if (uCG.unsleevedPCIEGroupThree.includes(product.title)) {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.instructions = '240/215 - Corsair Type 1'
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.instructions = '240 - Corsair Type 1'
                    }
                } else if (product.title === 'Lian Li x DAN A4-H2O 8 (6+2) Pin PCIE Unsleeved Custom Cable' || product.title === 'Lian Li x DAN A4-H2O 6 Pin PCIE Unsleeved Custom Cable') {
                    product.instructions = '180 - Corsair Type 1'
                }

                // 12 PCIE
                else if (product.title === 'Nvidia 12 Pin PCIE Unsleeved Custom Cable') {
                    if (product.case === 'Sliger SV series' || product.case === 'Lian Li x DAN A4-H2O') {
                        product.instructions = '300 - Corsair 12 pin'
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
                    }
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
                } else if (product.moboModel == 'Asus ROG Crosshair VIII Impact' && uCG.unsleevedEPSImpactGroup.includes(product.title)) {
                    product.instructions = "210 - Silverstone Type 2"
                }

                // 8 & 6 PCIE
                else if (uCG.unsleevedPCIEGroupOne.includes(product.title) || uCG.unsleevedPCIEGroupThree.includes(product.title)) {
                    product.instructions = "300 - Silverstone Type 1"
                } else if (uCG.unsleevedPCIEGroupTwo.includes(product.title)) {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.instructions = '155/150 - Silverstone Type 2'
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.instructions = '170/155 - Silverstone Type 2'
                    }
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
                } else if (uCG.unsleeved24GroupTwo.includes(product.title) || product.title === 'NCASE M1 24 Pin Unsleeved Custom Cable') {
                    product.instructions = "200 - Cooler Master Type 2"
                }

                else if (product.title === 'Lian Li x DAN A4-H2O 24 Pin Unsleeved Custom Cable') {
                    product.instructions = 'Cooler Master build - all wires 270 except for top wire in box 11 and both wires in box 12 (260)'
                }

                // EPS
                else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
                    product.instructions = "280 - Silverstone Type 1"
                } else if (uCG.unsleevedEPSGroupTwo.includes(product.title)) {
                    product.instructions = "360 - Silverstone Type 2/3"
                }

                else if (product.title === 'Lian Li x DAN A4-H2O 8 (4+4) Pin CPU/EPS Unsleeved Custom Cable') {
                    product.instructions = '420 - Silverstone Type 1 (double outside, no cross)'
                }

                // 8 & 6 PCIE
                else if (uCG.unsleevedPCIEGroupOne.includes(product.title)) {
                    product.instructions = "300 - Cooler Master Type 1"
                } else if (uCG.unsleevedPCIEGroupTwo.includes(product.title)) {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.instructions = '170/155 - Cooler Master Type 2'
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.instructions = '160/155 - Cooler Master Type 2'
                    }
                } else if (uCG.unsleevedPCIEGroupThree.includes(product.title)) {
                    if (gCD.fanClips.includes(product.gpuModel)) {
                        product.instructions = '230/205 - Cooler Master Type 1'
                    } else if (gCD.backplateClips.includes(product.gpuModel)) {
                        product.instructions = '220 - Cooler Master Type 1'
                    }
                }

                else if (product.title === 'Lian Li x DAN A4-H2O 8 (6+2) Pin PCIE Unsleeved Custom Cable' || product.title === 'Lian Li x DAN A4-H2O 6 Pin PCIE Unsleeved Custom Cable') {
                    product.instructions = "150 - Cooler Master Type 1 (opposite, bottom left double, no cross)"
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

                else if (product.title === 'Lian Li x DAN A4-H2O 24 Pin Unsleeved Custom Cable') {
                    product.instructions = 'All 250 - EVGA Build'
                }

                // EPS
                else if (uCG.unsleevedEPSGroupOne.includes(product.title)) {
                    product.instructions = "280 - Silverstone Type 1"
                }

                else if (product.title === 'Lian Li x DAN A4-H2O 8 (4+4) Pin CPU/EPS Unsleeved Custom Cable') {
                    product.instructions = '420 Silverstone Type 1 (double outside, no cross)'
                }

                // 8 & 6 PCIE
                else if (uCG.unsleevedPCIEGroupOne.includes(product.title) || uCG.unsleevedPCIEGroupThree.includes(product.title)) {
                    product.instructions = "300 - Silverstone Type 1"
                }

                else if (product.title === 'Lian Li x DAN A4-H2O 8 (6+2) Pin PCIE Unsleeved Custom Cable' || product.title === 'Lian Li x DAN A4-H2O 6 Pin PCIE Unsleeved Custom Cable') {
                    product.instructions = "150 - Silverstone Type 1 (double outside, Silverstone build)"
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
                else if (uCG.unsleevedPCIEGroupOne.includes(product.title) || uCG.unsleevedPCIEGroupThree.includes(product.title)) {
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

        })
    })
    return orders
}

module.exports = updateUnsleeved
