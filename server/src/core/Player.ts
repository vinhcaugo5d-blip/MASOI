/**
 * ============================================================
 * MASOI AI
 * Player
 * ============================================================
 * Đại diện cho một người chơi hoặc AI trong trận.
 * ============================================================
 */

export class Player {

    // ===========================
    // Thông tin cơ bản
    // ===========================

    public id: string;

    public name: string;

    public avatar: string;

    public socketId: string | null;

    public isAI: boolean;

    // ===========================
    // Trạng thái
    // ===========================

    public alive: boolean = true;

    public connected: boolean = true;

    public ready: boolean = false;

    // ===========================
    // Vai trò
    // ===========================

    public role: string = "";

    public team: string = "";

    // ===========================
    // Vote
    // ===========================

    public voteTarget: string | null = null;

    public nightTarget: string | null = null;

    // ===========================
    // Hiệu ứng
    // ===========================

    public effects: string[] = [];

    // ===========================
    // Thống kê
    // ===========================

    public stars: number = 0;

    public wins: number = 0;

    public loses: number = 0;

    public mvp: number = 0;

    public kda: number = 3.0;

    constructor(
        id: string,
        name: string,
        isAI: boolean = false
    ) {

        this.id = id;
        this.name = name;
        this.isAI = isAI;

        this.avatar = "";

        this.socketId = null;

    }

    // ===========================
    // Trạng thái
    // ===========================

    public kill() {

        this.alive = false;

    }

    public revive() {

        this.alive = true;

    }

    public resetVote() {

        this.voteTarget = null;

    }

    public resetNightAction() {

        this.nightTarget = null;

    }

    public resetEffects() {

        this.effects = [];

    }

}
