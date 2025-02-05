#include <iostream>
using namespace std;

bool seqSearch(int list[], int size, int target, int& locn) {
    int looker = 0;
    while (looker < size && target != list[looker]) {
        looker++;
    }
    locn = looker;
    bool found;
    if (looker < size && target == list[looker]) {
        found = true;
    } else {
        found = false;
    }
    return found;
}

int main() {
    int myData[] = {5, 7, 15, 8, 4, 11};
    int Index;
    bool result = seqSearch(myData, 6, 15, Index);
    if (result) {
        cout << "Found Data: " << 15 << " at Index: " << Index << endl;
    } else {
        cout << "Not Found!" << endl;
    }
    return 0;
}
