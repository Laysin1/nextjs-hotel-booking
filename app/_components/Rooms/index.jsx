import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import RoomCard from "../RoomCard";
import { getAllRooms } from "@/app/_lib/supabase/rooms";

async function Rooms() {
  const rooms = await getAllRooms();

  // Prevent crash if rooms is null or undefined
  const displayedRooms = rooms?.slice(0, 6) || [];

  return (
    <section className={styles.roomsSection}>
      <div className="container">
        <Heading className="text-center">Our Rooms</Heading>

        <p className="text-center">
          Lorem Ipsum is available, but the majority have suffered
        </p>

        <div className={styles.roomsGrid}>
          {displayedRooms.length > 0 ? (
            displayedRooms.map((item, index) => (
              <RoomCard key={index} room={item} />
            ))
          ) : (
            <p>Loading rooms...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Rooms;