package Class_Learning;

public class 5th{
    class MyThread extends Thread {
        private String threadName;
        
        MyThread(String name) {
            this.threadName = name;
        }
        
        public void run() {
            try {
                for (int i = 5; i > 0; i--) {
                    System.out.println("Thread " + threadName + ": " + i);
                    Thread.sleep(1000);
                }
            } catch (InterruptedException e) {
                System.out.println("Thread " + threadName + " interrupted.");
            }
            System.out.println("Thread " + threadName + " exiting.");
        }
    }
    
    public class MultiThreadExample {
        public static void main(String[] args) {
            MyThread thread1 = new MyThread("Thread 1");
            MyThread thread2 = new MyThread("Thread 2");
            MyThread thread3 = new MyThread("Thread 3");
            
            thread1.start();
            thread2.start();
            thread3.start();
            
            try {
                // Main thread waits for all threads to finish
                thread1.join();
                thread2.join();
                thread3.join();
            } catch (InterruptedException e) {
                System.out.println("Main thread interrupted.");
            }
            
            System.out.println("All threads have finished execution.");
        }
    }
    
    
}
