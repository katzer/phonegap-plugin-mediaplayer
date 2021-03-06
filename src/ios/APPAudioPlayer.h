/*
 * Copyright (c) 2013-2016 by appPlant GmbH. All rights reserved.
 *
 * APPAudioPlayer.h
 *
 * Created by Vadim Fainshtein    on 01/16/14.
 * Updated by Etienne Adriaenssen on 06/10/15.
 *
 * @APPPLANT_LICENSE_HEADER_START@
 *
 * This file contains Original Code and/or Modifications of Original Code
 * as defined in and that are subject to the Apache License
 * Version 2.0 (the 'License'). You may not use this file except in
 * compliance with the License. Please obtain a copy of the License at
 * http://opensource.org/licenses/Apache-2.0/ and read it before using this
 * file.
 *
 * The Original Code and all software distributed under the License are
 * distributed on an 'AS IS' basis, WITHOUT WARRANTY OF ANY KIND, EITHER
 * EXPRESS OR IMPLIED, AND APPLE HEREBY DISCLAIMS ALL SUCH WARRANTIES,
 * INCLUDING WITHOUT LIMITATION, ANY WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT.
 * Please see the License for the specific language governing rights and
 * limitations under the License.
 *
 * @APPPLANT_LICENSE_HEADER_END@
 */

#import "APPAudio.h"

@protocol APPAudioPlayerDelegate <NSObject>

- (void) didFailPlayingAudio:(APPAudio*)audio;
- (void) didStartPlayingAudio:(APPAudio*)audio;
- (void) didPausePlayingAudio:(APPAudio*)audio;
- (void) didFinishPlayingAudio:(APPAudio*)audio;
- (void) didStopPlayingAudio:(APPAudio*)audio;

@end

@interface APPAudioPlayer : NSObject

-(void)queue:(NSArray*)song play:(BOOL)startPlaying replace:(BOOL)replaceFlag;
-(void)play;
-(void)playNext;
-(void)pause;
-(void)stop;
-(void)fadeOutVolume;
-(void)fadeInVolume;

@property (readonly, getter=getNextAudio) APPAudio* nextAudio;
@property (readonly, getter=getCurrentAudio) APPAudio* currentAudio;
@property (nonatomic, assign) id<APPAudioPlayerDelegate> delegate;

@end
