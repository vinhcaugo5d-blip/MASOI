/**
 * ============================================================
 * MASOI AI
 * Game State
 * ============================================================
 * Lưu toàn bộ trạng thái của trận đấu.
 * ============================================================
 */

export class GameState {

    // ===========================
    // Thời gian
    // ===========================

    public day: number = 1;

    public night: number = 0;

    public round: number = 1;

    // ===========================
    // Phase
    // ===========================

    public phase: string = "LOBBY";

    // ===========================
    // Kết quả
    // ===========================

    public winner: string | null = null;

    public gameOver: boolean = false;

    // ===========================
    // Nhật ký
    // ===========================

    public logs: string[] = [];

    // ===========================
    // Replay
    // ===========================

    public replay: string[] = [];

    // ===========================
    // Time
    // ===========================

    public startedAt: Date | null = null;

    public endedAt: Date | null = null;

    // ===========================
    // Methods
    // ===========================

    public startGame() {

        this.startedAt = new Date();

    }

    public endGame() {

        this.endedAt = new Date();

        this.gameOver = true;

    }

    public addLog(message: string) {

        this.logs.push(message);

    }

    public addReplay(event: string) {

        this.replay.push(event);

    }

}
