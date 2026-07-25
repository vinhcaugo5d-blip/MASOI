/**
 * ============================================================
 * MASOI AI
 * Artificial Intelligence Brain
 * Version 1.0
 * ============================================================
 */

import { Memory } from "./Memory";
import { Suspicion } from "./Suspicion";
import { Personality } from "./Personality";

export interface ChatMessage {

    playerId: string;

    playerName: string;

    message: string;

    time: Date;

}

export interface AIEvent {

    type: string;

    target?: string;

    source?: string;

    value?: number;

    round?: number;

}

export class AIBrain {

    /**
     * ==========================
     * Thông tin cơ bản
     * ==========================
     */

    public id: string;

    public name: string;

    public personality: Personality;

    /**
     * ==========================
     * Vai trò
     * ==========================
     */

    public role: string = "";

    public team: string = "";

    /**
     * ==========================
     * Bộ nhớ
     * ==========================
     */

    public memory: Memory;

    /**
     * ==========================
     * Mức độ nghi ngờ
     * ==========================
     */

    public suspicion: Suspicion;

    /**
     * ==========================
     * Người tin tưởng
     * ==========================
     */

    public trustedPlayers: Set<string>;

    /**
     * ==========================
     * Người nghi ngờ
     * ==========================
     */

    public suspectedPlayers: Set<string>;

    /**
     * ==========================
     * Lịch sử chat
     * ==========================
     */

    public chatHistory: ChatMessage[];

    /**
     * ==========================
     * Lịch sử sự kiện
     * ==========================
     */

    public events: AIEvent[];

    /**
     * ==========================
     * Người đã chết
     * ==========================
     */

    public deadPlayers: Set<string>;

    /**
     * ==========================
     * Người còn sống
     * ==========================
     */

    public alivePlayers: Set<string>;

    /**
     * ==========================
     * Mục tiêu hiện tại
     * ==========================
     */

    public currentTarget: string | null;

    /**
     * ==========================
     * Người AI muốn bảo vệ
     * ==========================
     */

    public protectTarget: string | null;

    /**
     * ==========================
     * Người AI muốn cứu
     * ==========================
     */

    public saveTarget: string | null;

    /**
     * ==========================
     * Người AI muốn soi
     * ==========================
     */

    public inspectTarget: string | null;

    /**
     * ==========================
     * Người AI muốn giết
     * ==========================
     */

    public killTarget: string | null;

    /**
     * ==========================
     * Constructor
     * ==========================
     */

    constructor(

        id: string,

        name: string,

        personality: Personality

    ) {

        this.id = id;

        this.name = name;

        this.personality = personality;

        this.memory = new Memory();

        this.suspicion = new Suspicion();

        this.trustedPlayers = new Set();

        this.suspectedPlayers = new Set();

        this.chatHistory = [];

        this.events = [];

        this.deadPlayers = new Set();

        this.alivePlayers = new Set();

        this.currentTarget = null;

        this.protectTarget = null;

        this.saveTarget = null;

        this.inspectTarget = null;

        this.killTarget = null;

    }

    /**
     * =====================================================
     * Khởi tạo danh sách người chơi
     * =====================================================
     */

    public initializePlayers(

        players: {

            id: string;

            name: string;

        }[]

    ) {

        this.alivePlayers.clear();

        for (const player of players) {

            this.alivePlayers.add(player.id);

            this.suspicion.set(player.id, 0);

        }

    }

    /**
     * =====================================================
     * Ghi nhớ chat
     * =====================================================
     */

    public rememberChat(

        playerId: string,

        playerName: string,

        message: string

    ) {

        this.chatHistory.push({

            playerId,

            playerName,

            message,

            time: new Date()

        });

        this.memory.messages.push(

            `${playerName}: ${message}`

        );

    }

    /**
     * =====================================================
     * Ghi nhớ sự kiện
     * =====================================================
     */

    public rememberEvent(event: AIEvent) {

        this.events.push(event);

        this.memory.events.push(

            JSON.stringify(event)

        );

    }

    /**
     * =====================================================
     * Người chết
     * =====================================================
     */

    public playerDied(playerId: string) {

        this.deadPlayers.add(playerId);

        this.alivePlayers.delete(playerId);

    }

    /**
     * =====================================================
     * Người hồi sinh
     * =====================================================
     */

    public revivePlayer(playerId: string) {

        this.deadPlayers.delete(playerId);

        this.alivePlayers.add(playerId);

    }

    /**
     * =====================================================
     * Tin tưởng
     * =====================================================
     */

    public trust(playerId: string) {

        this.trustedPlayers.add(playerId);

    }

    /**
     * =====================================================
     * Hủy tin tưởng
     * =====================================================
     */

    public removeTrust(playerId: string) {

        this.trustedPlayers.delete(playerId);

    }

    /**
     * =====================================================
     * Nghi ngờ
     * =====================================================
     */

    public suspect(

        playerId: string,

        score: number = 10

    ) {

        this.suspectedPlayers.add(playerId);

        const current = this.suspicion.get(playerId);

        this.suspicion.set(

            playerId,

            current + score

        );

    }
