/**
 * ============================================================
 * MASOI AI
 * Room
 * ============================================================
 * Quản lý một phòng chơi.
 * ============================================================
 */

import { Player } from "./Player";
import { GameEngine } from "./GameEngine";

export class Room {

    // ===========================
    // Thông tin phòng
    // ===========================

    public id: string;

    public name: string;

    public hostId: string;

    // ===========================
    // Danh sách người chơi
    // ===========================

    public players: Player[] = [];

    // ===========================
    // Game
    // ===========================

    public engine: GameEngine;

    // ===========================
    // Cài đặt
    // ===========================

    public maxPlayers: number = 12;

    public privateRoom: boolean = false;

    public started: boolean = false;

    constructor(
        id: string,
        name: string,
        hostId: string
    ) {

        this.id = id;

        this.name = name;

        this.hostId = hostId;

        this.engine = new GameEngine(id);

    }

    // ===========================
    // Player
    // ===========================

    public addPlayer(player: Player) {

        if (this.players.length >= this.maxPlayers) {

            return false;

        }

        this.players.push(player);

        this.engine.addPlayer(player);

        return true;

    }

    public removePlayer(playerId: string) {

        this.players = this.players.filter(

            player => player.id !== playerId

        );

        this.engine.removePlayer(playerId);

    }

    public getPlayer(playerId: string) {

        return this.players.find(

            player => player.id === playerId

        );

    }

    // ===========================
    // Game
    // ===========================

    public startGame() {

        this.started = true;

        this.engine.startGame();

    }

}
