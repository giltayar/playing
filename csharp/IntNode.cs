
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/* The class IntNode **/
public class IntNode
{
    private int value;                      // IntNode value
    private IntNode next;               // next IntNode

    /* Constructor  - returns a IntNode with "value" as value and without successesor IntNode **/
    public IntNode(int value)
    {
        this.value = value;
        this.next = null;
    }

    /* Constructor  - returns a IntNode with "value" as value and its successesor is "next" **/
    public IntNode(int value, IntNode next)
    {
        this.value = value;
        this.next = next;
    }

// Set ופעולות Get פעולות

    /* Returns the IntNode "value" **/
    public int GetValue()
    {
        return  this.value;
    }

    /* Returns the IntNode "next" IntNode **/
    public IntNode GetNext()
    {
        return this.next;
    }

    /* Return if the current IntNode has successor **/
    public bool HasNext()
    {
         return (this.next != null);
    }

    /* Set the value attribute to be "value" **/
    public void SetValue(int value)
    {
         this.value = value;
    }

    /* Set the next attribute to be "next" **/
    public void SetNext(IntNode  next)
    {
         this.next = next;
    }

      /* Returns a string that describes  the IntNode (and its' successesors **/
    public override string ToString()
    {
            return value + " --> " + next;
    }
}

