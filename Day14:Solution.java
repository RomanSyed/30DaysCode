import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;


class Difference {
  	private int[] elements;
  	public int maximumDifference;
  
	// Add your code here
    public Difference(int [] array){
        this.elements=array;
    }
   public int computeDifference(){
        for(int i=0;i<this.elements.length;i++){
            for(int j=1;j<this.elements.length;j++){
                int Tempmax=java.lang.Math.abs(this.elements[i]-this.elements[j]);
                if(Tempmax>maximumDifference){
                    maximumDifference=Tempmax;
                }
            }
        }
        return maximumDifference;
    }

} // End of Difference class

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        sc.close();

        Difference difference = new Difference(a);

        difference.computeDifference();

        System.out.print(difference.maximumDifference);
    }
}
