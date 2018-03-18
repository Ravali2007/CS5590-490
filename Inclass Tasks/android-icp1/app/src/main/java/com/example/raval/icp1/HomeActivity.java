package com.example.raval.icp1;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

/**
 * Created by raval on 3/18/2018.
 */

public class HomeActivity extends Activity {
    TextView tx;
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        tx = (TextView)findViewById(R.id.textView);
    }
}
