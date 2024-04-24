class Hostel {
    int roomNumber;
    
    void allotRoom(int roomNumber) {
        this.roomNumber = roomNumber;
        System.out.println("Room number " + roomNumber + " allotted.");
    }
}

class BoysHostel extends Hostel {
    void allotRoom(int roomNumber, String studentName) {
        super.allotRoom(roomNumber);
        System.out.println("Student " + studentName + " allotted to room number " + roomNumber + " in Boys' Hostel.");
    }
}

class GirlsHostel extends Hostel {
    void allotRoom(int roomNumber, String studentName, String course) {
        super.allotRoom(roomNumber);
        System.out.println("Student " + studentName + " allotted to room number " + roomNumber + " in Girls' Hostel for course " + course + ".");
    }
    
    @Override
    void allotRoom(int roomNumber) {
        super.allotRoom(roomNumber);
        System.out.println("Welcome to Girls' Hostel!");
    }
}

public class HostelManagement {
    public static void main(String[] args) {
        BoysHostel boysHostel = new BoysHostel();
        GirlsHostel girlsHostel = new GirlsHostel();
        
        boysHostel.allotRoom(101, "John Doe");
        girlsHostel.allotRoom(201, "Jane Smith", "Computer Science");
        girlsHostel.allotRoom(301);
        boysHostel.allotRoom(102, "Alex Johnson");
    }
}

