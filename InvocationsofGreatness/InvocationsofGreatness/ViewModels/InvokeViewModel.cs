using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvocationsofGreatness.ViewModels
{
    public class InvokeViewModel
    {
        public int OrbOne { get; set; }
        public int OrbTwo { get; set; }
        public int OrbThree { get; set; }

        public int[] Invoke()
        {
            int[] invocation = new int[] { OrbOne, OrbTwo, OrbThree };
            
            int quasCount = 0;
            int wexCount = 0;
            int exortCount = 0;
            foreach(int i in invocation)
            {
                if (i == 1)
                {
                    quasCount++;
                }
                else if (i == 2)
                {
                    wexCount++;
                }
                else if (i == 3)
                {
                    exortCount++;
                }
            }
            int[] results = new int[] { quasCount, wexCount, exortCount};
            return results;
        }
    }
}
