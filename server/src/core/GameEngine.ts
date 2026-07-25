/**
 * ============================================================
 * MASOI AI
 * Core Game Engine
 * ============================================================
 * Trái tim của toàn bộ game.
 * File này KHÔNG chứa:
 * - Socket.IO
 * - AI
 * - React
 * - Database
 *
 * Nó chỉ quản lý luật chơi.
 * ============================================================
 */

export class GameEngine {

    // ===========================
    // Thông tin trận đấu
    // ===========================

    private roomId: string = "";

    private started: boolean = false;

    private finished: boolean = false;

    private day: number = 1;

    private night: number = 0;

    private round: number = 1;

    // ===========================
    // Danh sách người chơi
    // ===========================

    private players: any[] = [];

    private deadPlayers: any[] = [];

    // ===========================
    // Vote
    // ===========================

    private votes = new Map<string, string>();

    // ===========================
    // Constructor
    // ===========================

    constructor(roomId: string) {
        this.roomId = roomId;
    }

    // ===========================
    // Getter
    // ===========================

    public getRoomId() {
        return this.roomId;
    }

    public isStarted() {
        return this.started;
    }

    public isFinished() {
        return this.finished;
    }

    public getPlayers() {
        return this.players;
    }

    public getAlivePlayers() {
        return this.players.filter(player => player.alive);
    }

    public getDeadPlayers() {
        return this.deadPlayers;
    }

    // ===========================
    // Player
    // ===========================

    public addPlayer(player: any) {
        this.players.push(player);
    }

    public removePlayer(playerId: string) {
        this.players = this.players.filter(
            player => player.id !== playerId
        );
    }

    // ===========================
    // Game
    // ===========================

    public startGame() {
        this.started = true;
        this.finished = false;
    }

    public endGame() {
        this.finished = true;
    }

    // ===========================
    // Phase
    // ===========================

    public nextNight() {
        this.night++;
    }

    public nextDay() {
        this.day++;
    }

    public nextRound() {
        this.round++;
    }

    // ===========================
    // Vote
    // ===========================

    public vote(voterId: string, targetId: string) {
        this.votes.set(voterId, targetId);
    }

    public clearVotes() {
        this.votes.clear();
    }

    // ===========================
    // Death
    // ===========================

    public killPlayer(player: any) {

        player.alive = false;

        this.deadPlayers.push(player);

    }

    // ===========================
    // Win
    // ===========================

    public checkWinner() {

        /**
         * Giai đoạn sau sẽ viết
         */

        return null;

    }

}
