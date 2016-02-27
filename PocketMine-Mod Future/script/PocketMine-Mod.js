print("PocketMine-Mod Carregado com Sucesso");
print("Use /help 1 para ver os comandos");

var codeVersion = 0.3;
var codeName = PocketMine-Mod;
var codeProtocol = 43;

function procCmd(cmd){
	var cmd = cmd.split(" ")
	if(cmd[0] == "gamemode"){
		if(cmd[1] == "1"){
			Level.setGameMode(1);
			clientMessage("§bYour Change Gamemode for §e1");
			}
			if(cmd[1] == "0"){
				Level.setGameMode(0);
			   clientMessage("§bYour Change Gamemode for §e0");
				}
				}
				if(cmd[0] == "gm"){
					if(cmd[1] == "1"){
						Level.setGameMode(1);
			clientMessage("§bYour Change Gamemode for §e1");
			}
			if(cmd[1] == "0"){
				Level.setGameMode(0);
			clientMessage("§bYour Change Gamemode for §e0");
			}
			}
			if(cmd[0] == "setspawn"){
				clientMessage("spawn setado em:");
				clientMessage("X: " + Math.round(Player.getX()) + " , Y: " + Math.round(Player.getY()) + " , Z: " + Math.round(Player.getZ()));
		
				var x = getPlayerX();
				var y = getPlayerY();
				var z = getPlayerZ();
		
		Level.setSpawn(x, y, z);
	}
		if(cmd[0] == "tpadd"){
		var tpX = getPlayerX();
		var tpY = getPlayerY();
		var tpZ = getPlayerZ();
		
		clientMessage("Teleport adicionado em:");
		clientMessage("X: " + Math.round(Player.getX()) + " , Y: " + Math.round(Player.getY()) + " , Z: " + Math.round(Player.getZ()));
		clientMessage("Usa §c/teleport §fpra transportar");
		clientMessage("As coordenadas estão salvas");
	}
	
	if(cmd[0] == "teleport"){
		clientMessage("Teportando...");
		setPosition(getPlayerEnt(), tpX, tpY+1,tpZ);
	}
			if(cmd[0] == "time"){
				if(cmd[1] == "set"){
					if(cmd[2] == "day"){
						clientMessage("§bTime set §eDay");
						Level.setTime(0);
						}
						if(cmd[2] == "night"){
							Level.setTime(19000);
							clientMessage("§bTime set §eNight");
							}
						}
					}
					if(cmd[0] == "setspawn"){
						Level.setSpawn(Player.getX(), Player.getY(), Player.getZ());
						clientMessage("§bSpawn setted");
						}
						if(cmd[0] == "heal"){
							Player.setHealth(20);
							clientMessage("§bHealing your Life");
							}
							if(cmd[0] == "kill"){
								Player.setHealth(0);
								}
								if(cmd[0] == "help"){
									if(cmd[1] == "1"){
										clientMessage("§6=> §bHelp  1§6<=");
										clientMessage("§a/gamemode §f1 and 0 gamemodes");
										clientMessage("§a/time set §ftime set Day and Night");
										clientMessage("§a/heal §fhealing your life");
										clientMessage("§a/kill §fkill you");
										clientMessage("§a/setspawn §fset world spawn");
										clientMessage("§a/stop §fstopping your world");
										clientMessage("§a/tpadd §fselecione as coordenadas para teleportar");
										clientMessage("§a/setspawn §fset seu spawn do mundo");
										clientMessage("§bUse §e/help 2");
										}
										if(cmd[1] == "2"){
										clientMessage("§6=> §bHelp  2§6<=");
										clientMessage("§a/ticks §f[speed/default/slow]");
										clientMessage("§a/teleport §fuse para teleportar as coordenadas salvas");
										clientMessage("§a/explode §fexplode area");
										clientMessage("§a/setblock §f[stone/quartz]");
										clientMessage("§a/version §fpocketmine-mod version");
										clientMessage("§a/xp §f[1/15/30/infinity/clear]");
										clientMessage("§a/hunger §fregenerate hunger");
										clientMessage("§a/worldedit §fworldedit commands");
                         clientMessage("§a/plugins §flist your plugins");
										}
										}
										if(cmd[0] == "stop"){
											ModPE.leaveGame();
											}
											if(cmd[0] == "ticks"){
												if(cmd[1] == "speed"){
													ModPE.setGameSpeed(200);
													}
													if(cmd[1] == "default"){
														ModPE.setGameSpeed(20);
														}
														if(cmd[1] == "slow"){
															ModPE.setGameSpeed(5);
															}
															}
															if(cmd[0] == "explode"){
																explode(Player.getX(), Player.getY(), Player.getZ(), 10);
																}
																if(cmd[0] == "setblock"){
																	if(cmd[1] == "stone"){
																	Level.setTile(Player.getX(), Player.getY()-1, Player.getZ(), 1, 0);
																	}
																	if(cmd[1] == "quartz"){
																		Level.setTile(Player.getX(), Player.getY()-1, Player.getZ(), 155, 0);
																		}
																		}
																		if(cmd[0] == "version"){
																			clientMessage("§ePocketMine-Mod Beta 0.3 ○ 0.14.0 ○ by RedstoneAlmeida");
																			}
																			if(cmd[0] == "xp"){
																				if(cmd[1] == "1"){
																					Player.setLevel(1);
																					}
																					if(cmd[1] == "15"){
																						Player.setLevel(15);
																						}
																						if(cmd[1] == "30"){
																							Player.setLevel(30);
																							}
																							if(cmd[1] == "infinity"){
																								Player.setLevel(3000);
																								}
																								if(cmd[1] == "clear"){
																									Player.setLevel(0);
																									}
																								}
																								if(cmd[0] == "hunger"){
																									Player.setHunger(20);
																									}
																									if(cmd[0] == "plugins"){
																										clientMessage("§aPocketMine-Mod - §ePlugins");
																										clientMessage("§bWorldEdit PE | SimpleAuth");
																										}
																										if(cmd[0] == "pl"){
																											clientMessage("§aPocketMine-Mod - §ePlugins");
																										clientMessage("§bWorldEdit PE | SimpleAuth");
																										}
																											
																									
																
														
															

}
function newLevel(){
	clientMessage("§bUse §a/help 1");
	clientMessage("§bPocketMine Commands Mod by §eRedstoneAlmeida");
	
	clientMessage(" ")
	
	clientMessage("§eLoading §bSimpleAuth §eand §bWorldEdit")

}
function modTick(){
	ModPE.showTipMessage("§bPocketMine-Mod");
	ModPE.showTipMessage("§ePocketMine-Mod");

}


