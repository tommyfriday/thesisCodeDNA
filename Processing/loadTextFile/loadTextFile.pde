// declare array of gene
// ArrayList<DataType> name = new ArrayList<DataType>();
ArrayList<String> genes = new ArrayList<String>();


void setup() {
  size(500, 500);
  background(0);
  noStroke();
  String lines[] = loadStrings("geneSeq01.txt");

  //println(lines);

  //for (int i=0; i<lines.length; i++) {
  //  println(lines[i]);
  //  println(" ");
  //}
  String wholeText = "";
  for (int i=0; i<lines.length; i++) {
    wholeText = wholeText + lines[i];
  }
  // println(wholeText);
  // can do with join()

  
  
  for (int i=0; i<wholeText.length()-3; i=i+3) {
    genes.add( wholeText.substring(i, i+3) );
  }


  // check genes
  for (int i=0; i<genes.size(); i++) {
    String g = genes.get(i);
    if ( g.equals("GTT") ) {
      // draw other things
      println (g + " yes!");
    }
  }
}


void draw() {
}