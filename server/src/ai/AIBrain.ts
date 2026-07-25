/**
 * ============================================================
 * MASOI AI
 * Artificial Intelligence Brain
 * ============================================================
 */

import { Memory } from "./Memory";
import { Suspicion } from "./Suspicion";
import { Personality } from "./Personality";

export class AIBrain {

    /**
     * Thông tin AI
     */

    public id: string;

    public name: string;

    /**
     * Tính cách
     */

    public personality: Personality;

    /**
     * Trí nhớ
     */

    public memory: Memory;

    /**
     * Mức độ nghi ngờ
     */

    public suspicion: Suspicion;

    /**
     * Người AI tin tưởng
     */

    public trustedPlayers: Set<string>;

    /**
     * Người AI nghi ngờ
     */

    public suspectedPlayers: Set<string>;

    /**
     * Lịch sử chat
     */

    public chatHistory: string[];

    /**
     * Mục tiêu hiện tại
     */

    public currentTarget: string | null;

    /**
     * Constructor
     */

    constructor(id: string, name: string, personality: Personality) {

        this.id = id;

        this.name = name;

        this.personality = personality;

        this.memory = new Memory();

        this.suspicion = new Suspicion();

        this.trustedPlayers = new Set();

        this.suspectedPlayers = new Set();

        this.chatHistory = [];

        this.currentTarget = null;

    }

    /**
     * Ghi nhớ tin nhắn
     */

    public remember(message: string) {

        this.memory.messages.push(message);

        this.chatHistory.push(message);

    }

    /**
     * Ghi sự kiện
     */

    public rememberEvent(event: string) {

        this.memory.events.push(event);

    }

    /**
     * Tin tưởng ai
     */

    public trust(player: string) {

        this.trustedPlayers.add(player);

    }

    /**
     * Nghi ngờ ai
     */

    public suspect(player: string) {

        this.suspectedPlayers.add(player);

    }

    /**
     * Quên nghi ngờ
     */

    public clearSuspect(player: string) {

        this.suspectedPlayers.delete(player);

    }

    /**
     * Quên tin tưởng
     */

    public clearTrust(player: string) {

        this.trustedPlayers.delete(player);

    }

}
