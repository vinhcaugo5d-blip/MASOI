import { Room } from "../core/Room";

export class RoomManager {

    private rooms: Map<string, Room> = new Map();

    public createRoom(room: Room) {

        this.rooms.set(room.id, room);

    }

    public deleteRoom(roomId: string) {

        this.rooms.delete(roomId);

    }

    public getRoom(roomId: string) {

        return this.rooms.get(roomId);

    }

    public getRooms() {

        return Array.from(this.rooms.values());

    }

    public hasRoom(roomId: string) {

        return this.rooms.has(roomId);

    }

}
