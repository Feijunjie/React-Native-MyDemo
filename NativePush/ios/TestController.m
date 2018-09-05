//
//  TestController.m
//  NativePush
//
//  Created by junjie on 2018/9/3.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "TestController.h"
#import "UIView+Extension.m"
#import "ThirdViewController.h"
@interface TestController ()

@end

@implementation TestController

- (void)viewDidLoad {
    [super viewDidLoad];
  self.view.backgroundColor = [UIColor whiteColor];
  [self setLeftBarButtonItem];
  self.title = @"push界面";
  [self createUI];
}

-(void)setLeftBarButtonItem
{
  UIButton *backButton = [UIButton buttonWithType:UIButtonTypeCustom];
  [backButton setImage:[UIImage imageNamed:@"btn_back"] forState:UIControlStateNormal];
  [backButton addTarget:self action:@selector(backAction:) forControlEvents:UIControlEventTouchUpInside];
  
//  backButton.size = CGSizeMake(70, 30);
  // 让按钮的内容往左边偏移10
  backButton.contentEdgeInsets = UIEdgeInsetsMake(0, -5, 0, 0);
  // 让按钮内部的所有内容左对齐
  backButton.contentHorizontalAlignment = UIControlContentHorizontalAlignmentLeft;
  
  
  self.navigationItem.leftBarButtonItem = [[ UIBarButtonItem alloc]
                                           initWithCustomView:backButton];
  [self.navigationItem.leftBarButtonItem setTintColor:[UIColor whiteColor]];
}

- (void)backAction:(UIButton *)btn {
  [self dismissViewControllerAnimated:YES completion:nil];
}

- (void)createUI {
  UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
  btn.frame = CGRectMake(100, 100, 100, 50);
  btn.backgroundColor = [UIColor redColor];
  [self.view addSubview:btn];
  [btn addTarget:self action:@selector(clickBtn:) forControlEvents:UIControlEventTouchUpInside];
}

- (void)clickBtn:(UIButton *)btn {
  ThirdViewController *thirdVC = [ThirdViewController new];
  [self.navigationController pushViewController:thirdVC animated:YES];
}

- (void)viewWillAppear:(BOOL)animated {
  [super viewWillAppear:animated];
  self.navigationController.navigationBar.hidden = NO;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
