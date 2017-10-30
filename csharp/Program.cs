using System;

namespace csharp
{


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


    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("sdfasdfsadf");
            IntNode n1 = node(4, node(5, node(50, node(300, null))));
            IntNode n2 = node(1, node(2, node(17, node(1000, node(1001, node(1002,null))))));
            Console.WriteLine(Function2("baaabbbaaaab", 'b'));
            Console.WriteLine(n1);
            Console.WriteLine(n2);
            Console.WriteLine(Merge(n1, n2));
        }
        public static IntNode GetNode(IntNode n, int index)
        {
            for(int i = 0; i < index; i++)
            {
                n = n.GetNext();
            }
            return n;
        }
        public static bool IsTriangle(IntNode n)
        {
            int listLength = 0;
            IntNode curr = n;
            while(curr != null)
            {
                curr = curr.GetNext();
                listLength++;
            }
            if(listLength % 3 != 0 || n == null)
            {
                return false;
            }
            IntNode curr1 = n, curr2 = GetNode(n, listLength / 3), curr3 = GetNode(curr2, listLength / 3);
            while(curr3 != null)
            {
                if(curr1.GetValue() != curr2.GetValue() || curr2.GetValue() != curr3.GetValue() || curr1.GetValue() != curr3.GetValue())
                {
                    return false;
                }
                curr1 = curr1.GetNext();
                curr2 = curr2.GetNext();
                curr3 = curr3.GetNext();
            }
            return true;
        }
        public static int Function2(string str, char x, int index = 0)
        {
            if(index == str.Length)
            {
                return 0;
            }
            if(str[index] == x)
            {
                return 1 + Function2(str, x, index + 1);
            }
            return Function2(str, x, index + 1);
        }
        public static bool Function(int[] a1, int[] a2, int index = 0)
        {
            if(index == a1.Length)
            {
                return false;
            }
            for(int i = 0; i < a2.Length; i++)
            {
                if(a1[index] == a2[i])
                {
                    return true;
                }
            }
            return Function(a1, a2, index + 1);
        }
        public static IntNode Merge(IntNode n1, IntNode n2)
        {
            IntNode first = new IntNode(-1, null);
            IntNode curr3 = first;
            IntNode curr1 = n1, curr2 = n2;
            while(curr1 != null || curr2 != null)
            {
                if(curr1 == null && curr2 != null)
                {
                    curr3.SetNext(new IntNode(curr2.GetValue(), null));
                    curr2 = curr2.GetNext();
                }
                else if(curr2 == null && curr1 != null)
                {
                    curr3.SetNext(new IntNode(curr1.GetValue(), null));
                    curr1 = curr1.GetNext();
                }
                else
                {
                    if(curr1.GetValue() > curr2.GetValue())
                    {
                        curr3.SetNext(new IntNode(curr2.GetValue(), null));
                        curr2 = curr2.GetNext();
                    }
                    else
                    {
                        curr3.SetNext(new IntNode(curr1.GetValue(), null));
                        curr1 = curr1.GetNext();
                    }
                }
                curr3 = curr3.GetNext();
            }
            return first.GetNext();
        }
        public static IntNode Delete(IntNode n, int x)
        {
            IntNode head = n;
            while (head.GetValue() == x)
                head = n.GetNext();

            IntNode current = head;
            while (current != null)
            {
                if (current.GetNext() != null && current.GetNext().GetValue() == x)
                {
                    current.SetNext(current.GetNext().GetNext());
                }
                else
                {
                    current = current.GetNext();
                }
            }

            return head;
        }
        public static IntNode[] Split(IntNode n)
        {
            IntNode firstOdd = new IntNode(-1, null);
            IntNode firstEven = new IntNode(-1, null);
            IntNode current = n, currentOdd = firstOdd, currentEven = firstEven;
            while(current != null)
            {
                if(current.GetValue() % 2 == 0)
                {
                    currentEven.SetNext(current);
                    currentEven = currentEven.GetNext();
                    current = current.GetNext();
                    currentEven.SetNext(null);
                }
                else
                {
                    currentOdd.SetNext(current);
                    currentOdd = currentEven.GetNext();
                    current = current.GetNext();
                    currentOdd.SetNext(null);
                }


            }
            IntNode[] lists = {firstOdd.GetNext(), firstEven.GetNext()};
            return lists;
        }


        public static void PrintList(IntNode head, int index = 0)
        {
            if(head == null)
                return;
            if(index % 2 == 0)
            {
                Console.Write(head.GetValue() + ",");
            }
            PrintList(head.GetNext(), index + 1);

        }

        public static IntNode node(int x, IntNode next)
        {
            return new IntNode(x, next);
        }
    }
}
