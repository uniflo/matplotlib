import matplotlib.pyplot as plt
import sys
import json

def do_histogram(chart, outfile):
    try:
        buckets = chart["buckets"]
    except KeyError:
        buckets = 3
    plt.hist(chart["data"], bins=buckets)
    plt.savefig(outfile)
        
    
data = sys.argv[1]
template = sys.argv[2]
outfile = sys.argv[3]

print(data, template, outfile)

if template == "histogram":
    do_histogram(json.loads(data), outfile)