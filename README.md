# uVariants

Web application for automated annotation and design of amplicons (biotech, molecular diagnostics).  

Current State: 
March 26 2025 - the app is back in service with a todos....

>> Update genome from hg38 to hs1 (https://hgdownload.soe.ucsc.edu/goldenPath/hs1/bigZips/)
>> 
>> Fix Gene annotation on SNP query (kick out to GUI)
>> 
>> Recalculate 6mers (3' check utility)

The application relies on a 2bit file representation of the genome - much like UCSC's Genome Browser solutions.  Python is used on the backend to retrieve contextual sequences for SNPs queried, providing good performance.  I will be adding the entire 2bit genome backend soon on GitHub (after some cleanup now that quite a bit was updated).

Check out the poster here!  https://dna-utah.org/Posters/2017_AMP_Poster_Zach.pdf



For questions, reach out to zach@dna-utah.org.  


![image](https://github.com/user-attachments/assets/c7b73b36-3512-463d-bc14-592ee0c03c7c)


<img width="1296" alt="Screenshot 2025-03-26 at 2 43 47 PM" src="https://github.com/user-attachments/assets/71394435-b855-4756-8878-70a3e44b3675" />
